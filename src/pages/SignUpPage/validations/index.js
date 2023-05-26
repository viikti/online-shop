import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Must be more than 1 characters")
    .max(15, "Must be 15 characters or less")
    .required("This field cannot be empty"),
  lastName: Yup.string()
    .min(2, "Must be more than 1 characters")
    .max(20, "Must be 20 characters or less")
    .required("This field cannot be empty"),

  email: Yup.string()
    .email("Invalid email address format")
    .required("This field cannot be empty"),

  gender: Yup.string().required("Gender is required"),

  password: Yup.string()
    .required("Required")
    .min(8, "Must be at least 8 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required(),
  phone: Yup.string()
    .matches(
      /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
      "Invalid phone number"
    )
    .required("This field cannot be empty"),
});
