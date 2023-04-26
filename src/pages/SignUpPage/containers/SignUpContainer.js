import React from "react";
import { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import omit from "lodash/omit";

import { signUp } from "../api";

import useFetching from "../../../Hooks/useFetching";
import { signUpValidationSchema } from "../validations";
import SignUpLayout from "../components/SignUpLayout";

const SignUpContainer = () => {
  const navigate = useNavigate();

  const { data, errors, handleDataLoad } = useFetching(signUp);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      password: "",
      phone: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values, { resetForm }) => {
      handleDataLoad(omit(values, "confirmPassword"));
      resetForm();
    },
  });
  //
  // useEffect(() => {
  //   if (data?.data.success) {
  //     const timeout = setTimeout(() => {
  //       navigate(ROUTE_NAMES.SIGN_IN);
  //     }, 2000);
  //
  //     return () => clearTimeout(timeout);
  //   }
  // }, [data, navigate]);
  //
  // useEffect(() => {
  //   if (errors?.message) {
  //     errors.response.data.message = null;
  //   }
  // }, [errors]);
  return (
    <SignUpLayout
      values={formik.values}
      errors={formik.errors}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched}
      data={data}
      onSubmit={formik.handleSubmit}
    />
  );
};

export default SignUpContainer;
