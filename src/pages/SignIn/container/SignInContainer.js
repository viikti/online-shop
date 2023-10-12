import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import SignInView from "../components/SignInView";
import { signInThunk } from "../api";
import useForm from "../../../hooks/useForm";
import {
  errorAuthSelector,
  isAuthSelector,
  isLoadingSelector,
} from "../../../selectors";
import { ROUTE_NAMES } from "../../../routes/RouteName";
import { useNavigate } from "react-router-dom";

const SignInContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthSelector);
  const error = useSelector(errorAuthSelector);
  const isLoading = useSelector(isLoadingSelector);

  const { handleChange, form, handleReset } = useForm({
    email: "",
    password: ",",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signInThunk(form));
  };

  useEffect(() => {
    if (isAuth) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.POKEMON);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isAuth, navigate]);

  return (
    <SignInView
      form={form}
      error={error}
      handleNotification={handleSubmit}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      isAuth={isAuth}
      isLoading={isLoading}
    />
  );
};

export default SignInContainer;
