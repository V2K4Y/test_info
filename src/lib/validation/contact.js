import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().trim().required("Name is required"),
  company: Yup.string().trim().required("Company name is required"),
  title: Yup.string().trim().required("Job title is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Work email is required"),
  countryCode: Yup.string().trim().required("Country code is required"),
  phoneNumber: Yup.string()
    .trim()
    .matches(/^[0-9+\s-]*$/, "Enter a valid phone number")
    .required("Phone number is required"),
  services: Yup.array()
    .of(Yup.string())
    .min(1, "Select at least one service")
    .required("Select at least one service"),
  message: Yup.string().trim().required("Message is required"),
});

export const contactInitialValues = {
  name: "",
  company: "",
  title: "",
  email: "",
  countryCode: "+91",
  phoneNumber: "",
  services: [],
  message: "",
};

