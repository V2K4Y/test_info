"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { submitContactForm } from "@/app/api/send-email/route";
import CountryCodeSelect from "@/components/CountryCodeSelect";
import { contactSchema, contactInitialValues } from "@/lib/validation/contact";
import { contactServices } from "@/lib/config/contact";
import { buildPhone } from "@/lib/utils/phone";

function FloatingField({ id, name, label, type = "text", as, rows }) {
  return (
    <div>
      <div className="floating-field">
        <Field
          id={id}
          name={name}
          type={type}
          as={as}
          rows={rows}
          placeholder=" "
          className={`floating-input ${as === "textarea" ? "min-h-32 resize-none" : ""}`}
        />
        <label className="floating-label" htmlFor={id}>
          {label}
        </label>
      </div>
      <ErrorMessage
        name={name}
        component="p"
        className="mt-1 text-xs text-red-400"
      />
    </div>
  );
}

export default function ContactForm() {
  return (
    <Formik
      initialValues={contactInitialValues}
      validationSchema={contactSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const formData = new FormData();
          formData.append("name", values.name.trim());
          formData.append("company", values.company.trim());
          formData.append("title", values.title.trim());
          formData.append("email", values.email.trim());
          formData.append("message", values.message.trim());
          values.services.forEach((service) => formData.append("services", service));

          const phone = buildPhone(values.countryCode, values.phoneNumber);
          if (phone) {
            formData.append("phone", phone);
          }

          const result = await submitContactForm(formData);
          if (result.success) {
            toast.success("We will reach out soon.");
            resetForm();
          } else {
            toast.error("Unsuccessful, please try again.");
          }
        } catch (error) {
          toast.error("Unsuccessful, please try again.");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form className="premium-surface grid grid-cols-1 gap-5 rounded-xl bg-slate-950/88 px-5 py-6 backdrop-blur md:px-8 md:py-8">
          <FloatingField id="contact-name" name="name" label="Name*" />
          <FloatingField id="contact-company" name="company" label="Company Name*" />
          <FloatingField id="contact-title" name="title" label="Job Title*" />
          <FloatingField id="contact-email" name="email" label="Work Email*" type="email" />

          <div>
            <div className="flex gap-2 items-center">
              <div className="min-h-32">
                <label className="sr-only" htmlFor="contact-country-code">
                  Country code
                </label>
                <CountryCodeSelect
                  value={values.countryCode}
                  onChange={(code) => setFieldValue("countryCode", code)}
                  inputId="contact-country-code"
                  ariaLabel="Select country code"
                />
              </div>

              <div className="flex-1 min-w-0">
                <FloatingField id="contact-phone-number" name="phoneNumber" label="Mobile Number" type="tel" />
              </div>
            </div>
            <p className="mt-1 text-xs text-zinc-300/75">
              Type to search your country code, or scroll the list.
            </p>
          </div>

          <div>
            <label className="text-sm font-medium">
              What can we help with? Select all that apply*
            </label>
            <div className="mt-2 grid grid-cols-1 gap-2 text-sm text-zinc-100 min-[420px]:grid-cols-2">
              {contactServices.map((item) => (
                <label
                  key={item}
                  className="flex min-h-10 items-center gap-2 rounded-md border border-white/10 bg-black/60 px-3 py-2 text-xs leading-snug text-zinc-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/5"
                >
                  <Field
                    type="checkbox"
                    name="services"
                    value={item}
                    className="h-3.5 w-3.5 shrink-0 rounded border-white/20 bg-black text-cyan-300 focus:ring-cyan-300/40"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <ErrorMessage
              name="services"
              component="p"
              className="mt-1 text-xs text-red-400"
            />
          </div>

          <FloatingField id="contact-message" name="message" label="Message*" as="textarea" rows={4} />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full rounded-md bg-white px-6 py-3 text-sm font-semibold text-black shadow-md transition hover:bg-cyan-100 disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Book a Consultation"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
