import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import useForm from "../../../Hooks/useForm";
import SignInView from "../components/SignInView";
import { signInThunk } from "../api";

const SignInContainer = () => {
  const dispatch = useDispatch();

  const { handleChange, form, handleReset } = useForm({
    email: "",
    password: ",",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signInThunk(form));
  };

  // const handleNotification = () => {};

  return (
    <SignInView
      form={form}
      // error={error}
      handleNotification={handleSubmit}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default SignInContainer;
