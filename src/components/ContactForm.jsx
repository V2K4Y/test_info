"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { submitContactForm } from "@/app/api/send-email/route";
import CountryCodeSelect from "@/components/CountryCodeSelect";
import { contactSchema, contactInitialValues } from "@/lib/validation/contact";
import { contactServices } from "@/lib/config/contact";
import { buildPhone } from "@/lib/utils/phone";

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
            toast.error(result.error || "Failed to send. Please try again.");
          }
        } catch (error) {
          toast.error("Failed to send. Please try again.");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form className="grid grid-cols-1 gap-5 rounded-xl border border-white/10 bg-zinc-950/90 px-5 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur md:px-8 md:py-8">
          <div>
            <label className="text-sm font-medium" htmlFor="contact-name">
              Name*
            </label>
            <Field
              id="contact-name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
            />
            <ErrorMessage
              name="name"
              component="p"
              className="mt-1 text-xs text-red-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium" htmlFor="contact-company">
              Company Name*
            </label>
            <Field
              id="contact-company"
              name="company"
              type="text"
              placeholder="Enter your company name"
              className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
            />
            <ErrorMessage
              name="company"
              component="p"
              className="mt-1 text-xs text-red-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium" htmlFor="contact-title">
              Job Title*
            </label>
            <Field
              id="contact-title"
              name="title"
              type="text"
              placeholder="Enter your job title"
              className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
            />
            <ErrorMessage
              name="title"
              component="p"
              className="mt-1 text-xs text-red-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium" htmlFor="contact-email">
              Work Email*
            </label>
            <Field
              id="contact-email"
              name="email"
              type="email"
              placeholder="Enter your work email"
              className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="mt-1 text-xs text-red-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Official Mobile Number</label>
            <div className="mt-2 flex gap-2">
              <div className="shrink-0">
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
                <label className="sr-only" htmlFor="contact-phone-number">
                  Phone number
                </label>
                <Field
                  id="contact-phone-number"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="p"
                  className="mt-1 text-xs text-red-400"
                />
              </div>
            </div>
            <p className="mt-1 text-xs text-zinc-400">
              Type to search your country code, or scroll the list.
            </p>
          </div>

          <div>
            <label className="text-sm font-medium">
              What can we help with? Select all that apply*
            </label>
            <div className="mt-2 grid gap-2 text-sm text-zinc-100">
              {contactServices.map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <Field
                    type="checkbox"
                    name="services"
                    value={item}
                    className="rounded border-white/20 bg-black text-cyan-300 focus:ring-cyan-300/40"
                  />
                  {item}
                </label>
              ))}
            </div>
            <ErrorMessage
              name="services"
              component="p"
              className="mt-1 text-xs text-red-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium" htmlFor="contact-message">
              Message*
            </label>
            <Field
              as="textarea"
              id="contact-message"
              name="message"
              placeholder="Type your message here"
              rows={4}
              className="w-full rounded-md border border-white/10 bg-black px-4 py-3 text-sm text-white resize-none placeholder:text-zinc-600 focus:border-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
            />
            <ErrorMessage
              name="message"
              component="p"
              className="mt-1 text-xs text-red-400"
            />
          </div>

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
