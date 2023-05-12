import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import SignInView from "../components/SignInView";
import { signInThunk } from "../api";
import useForm from "../../../hooks/useForm";
import { errorAuthSelector, isAuthSelector } from "../../../selectors";

const SignInContainer = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthSelector);
  const error = useSelector(errorAuthSelector);

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
      error={error}
      handleNotification={handleSubmit}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default SignInContainer;
