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
        <Form className="group relative grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-zinc-950/70 p-6 shadow-[0_32px_100px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_40px_120px_-15px_rgba(6,182,212,0.15)] md:p-10">
          
          {/* Subtle top-glow accent */}
          <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

          {/* Form Header */}
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">Fill out the form below and we'll be in touch shortly.</h2>
            {/* <p className="text-xs text-zinc-400 md:text-sm">Fill out the form below and we'll be in touch shortly.</p> */}
          </div>

          <hr className="border-white/5" />

          {/* Name Field */}
          <div className="w-full">
            <div className="relative z-0 w-full">
              <Field
                id="contact-name"
                name="name"
                type="text"
                placeholder=" "
                className="peer w-full h-14 rounded-lg border border-white/10 bg-zinc-900/40 px-4 pb-2 pt-6 text-sm text-white transition-all duration-200 focus:border-cyan-400 focus:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/10"
              />
              <label 
                htmlFor="contact-name" 
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 origin-[0] scale-100 transform text-sm text-zinc-400 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-zinc-400 peer-focus:top-4 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-75 pointer-events-none"
              >
                Name <span className="text-cyan-400">*</span>
              </label>
            </div>
            <ErrorMessage name="name" component="p" className="mt-1.5 text-xs font-medium text-red-400/90" />
          </div>

          {/* Grid Layout for Company & Job Title */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Company Name */}
            <div className="w-full">
              <div className="relative z-0 w-full">
                <Field
                  id="contact-company"
                  name="company"
                  type="text"
                  placeholder=" "
                  className="peer w-full h-14 rounded-lg border border-white/10 bg-zinc-900/40 px-4 pb-2 pt-6 text-sm text-white transition-all duration-200 focus:border-cyan-400 focus:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/10"
                />
                <label 
                  htmlFor="contact-company" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 origin-[0] scale-100 transform text-sm text-zinc-400 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-zinc-400 peer-focus:top-4 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-75 pointer-events-none"
                >
                  Company Name <span className="text-cyan-400">*</span>
                </label>
              </div>
              <ErrorMessage name="company" component="p" className="mt-1.5 text-xs font-medium text-red-400/90" />
            </div>

            {/* Job Title */}
            <div className="w-full">
              <div className="relative z-0 w-full">
                <Field
                  id="contact-title"
                  name="title"
                  type="text"
                  placeholder=" "
                  className="peer w-full h-14 rounded-lg border border-white/10 bg-zinc-900/40 px-4 pb-2 pt-6 text-sm text-white transition-all duration-200 focus:border-cyan-400 focus:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/10"
                />
                <label 
                  htmlFor="contact-title" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 origin-[0] scale-100 transform text-sm text-zinc-400 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-zinc-400 peer-focus:top-4 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-75 pointer-events-none"
                >
                  Job Title <span className="text-cyan-400">*</span>
                </label>
              </div>
              <ErrorMessage name="title" component="p" className="mt-1.5 text-xs font-medium text-red-400/90" />
            </div>
          </div>

          {/* Email Field */}
          <div className="w-full">
            <div className="relative z-0 w-full">
              <Field
                id="contact-email"
                name="email"
                type="email"
                placeholder=" "
                className="peer w-full h-14 rounded-lg border border-white/10 bg-zinc-900/40 px-4 pb-2 pt-6 text-sm text-white transition-all duration-200 focus:border-cyan-400 focus:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/10"
              />
              <label 
                htmlFor="contact-email" 
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 origin-[0] scale-100 transform text-sm text-zinc-400 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-zinc-400 peer-focus:top-4 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-75 pointer-events-none"
              >
                Work Email <span className="text-cyan-400">*</span>
              </label>
            </div>
            <ErrorMessage name="email" component="p" className="mt-1.5 text-xs font-medium text-red-400/90" />
          </div>

          {/* Mobile Number Field */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400/80 pl-1">Official Mobile Number</label>
            <div className="flex items-start gap-2">
              {/* Country Code Select Wrapper */}
              <div className="shrink-0 h-14 flex items-center">
                <label className="sr-only" htmlFor="contact-country-code">Country code</label>
                <CountryCodeSelect
                  value={values.countryCode}
                  onChange={(code) => setFieldValue("countryCode", code)}
                  inputId="contact-country-code"
                  ariaLabel="Select country code"
                  className="h-full"
                />
              </div>

              {/* Phone Number Input */}
              <div className="flex-1 min-w-0">
                <div className="relative z-0 w-full">
                  <Field
                    id="contact-phone-number"
                    name="phoneNumber"
                    type="tel"
                    placeholder=" "
                    className="peer w-full h-14 rounded-lg border border-white/10 bg-zinc-900/40 px-4 pb-2 pt-6 text-sm text-white transition-all duration-200 focus:border-cyan-400 focus:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/10"
                  />
                  <label 
                    htmlFor="contact-phone-number" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 origin-[0] scale-100 transform text-sm text-zinc-400 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-zinc-400 peer-focus:top-4 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-75 pointer-events-none"
                  >
                    Phone number <span className="text-cyan-400">*</span>
                  </label>
                </div>
                <ErrorMessage name="phoneNumber" component="p" className="mt-1.5 text-xs font-medium text-red-400/90" />
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 pl-1">
              Type to search your country code, or scroll the list.
            </p>
          </div>

          {/* Services Checkboxes */}
          <div className="space-y-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400/80 pl-1">
              What can we help with? Select all that apply<span className="text-cyan-400"> *</span>
            </label>
            <div className="grid grid-cols-1 gap-2 text-sm text-zinc-200 sm:grid-cols-2">
              {contactServices.map((item) => (
                <label key={item} className="flex cursor-pointer items-center gap-3 rounded-lg border border-white/5 bg-zinc-900/20 px-4 py-3 transition-colors duration-200 hover:bg-zinc-900/60 has-[:checked]:border-cyan-500/30 has-[:checked]:bg-cyan-500/[0.04]">
                  <Field
                    type="checkbox"
                    name="services"
                    value={item}
                    className="h-4 w-4 rounded border-white/10 bg-black text-cyan-400 focus:ring-cyan-400/30 focus:ring-offset-zinc-950"
                  />
                  <span className="select-none text-xs font-medium text-zinc-300">{item}</span>
                </label>
              ))}
            </div>
            <ErrorMessage name="services" component="p" className="mt-1 text-xs font-medium text-red-400/90" />
          </div>

          {/* Message Field */}
          <div className="w-full">
            <div className="relative z-0 w-full">
              <Field
                as="textarea"
                id="contact-message"
                name="message"
                placeholder=" "
                rows={4}
                className="peer w-full rounded-lg border border-white/10 bg-zinc-900/40 px-4 pb-2 pt-6 text-sm text-white resize-none transition-all duration-200 focus:border-cyan-400 focus:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/10"
              />
              <label 
                htmlFor="contact-message" 
                className="absolute left-4 top-6 z-10 origin-[0] scale-100 transform text-sm text-zinc-400 transition-all duration-200 peer-focus:top-4 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-cyan-400 peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-75 pointer-events-none"
              >
                Message <span className="text-cyan-400">*</span>
              </label>
            </div>
            <ErrorMessage name="message" component="p" className="mt-1.5 text-xs font-medium text-red-400/90" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group/btn relative mt-2 flex w-full items-center justify-center overflow-hidden rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.01] hover:bg-cyan-50 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-50"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <svg className="h-4 w-4 animate-spin text-black" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                "Book a Consultation"
              )}
            </span>
          </button>
        </Form>
      )}
    </Formik>
  );
}