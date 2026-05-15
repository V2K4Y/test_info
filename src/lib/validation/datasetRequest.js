import * as Yup from "yup";

export const datasetRequestSchema = Yup.object({
  firstName: Yup.string().trim().required("First name is required"),
  lastName: Yup.string().trim().required("Last name is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid company email")
    .required("Company email is required"),
  phoneNumber: Yup.string()
    .trim()
    .matches(/^[0-9+\s-]*$/, "Enter a valid phone number")
    .required("Phone number is required"),
  category: Yup.string().trim().required("Category is required"),
  kind: Yup.string().trim().required("Kind is required"),
});

export const datasetRequestInitial = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  category: "",
  kind: "",
  source: "",
};

