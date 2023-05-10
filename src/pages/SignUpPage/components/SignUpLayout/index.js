import PropTypes, { checkPropTypes } from "prop-types";
import RegistrationForm from "../RegistrationForm";
import Banner from "../../../../commonComponents/Banner";

import styles from "./styles.module.scss";

const SignUpLayout = ({
  formik,
  data,
  errors,
  // values,
  // errors,
  // onChange,
  // onBlur,
  // touched,
  // onSubmit,
  // data,
  // error,
}) => (
  <div className={styles.wrapper}>
    <Banner />
    <RegistrationForm
      formik={formik}
      data={data}
      errorsResponce={errors}
      // values={values}
      // errors={errors}
      // onChange={onChange}
      // onBlur={onBlur}
      // touched={touched}
      // onSubmit={onSubmit}
    />
    {/*{data?.data.message && (*/}
    {/*  <SnackbarWithAlert*/}
    {/*    timeAlert={5000}*/}
    {/*    textAlert={data.data.message}*/}
    {/*    severity="success"*/}
    {/*  />*/}
    {/*)}*/}
    {/*{error?.response.data.message && (*/}
    {/*  <SnackbarWithAlert*/}
    {/*    timeAlert={5000}*/}
    {/*    textAlert={error?.response.data.message}*/}
    {/*    severity="error"*/}
    {/*  />*/}
    {/*)}*/}
  </div>
);

SignUpLayout.prototype = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    data: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
  error: PropTypes.shape({
    code: PropTypes.string,
    message: PropTypes.string,
    response: PropTypes.shape({
      data: PropTypes.shape({
        message: PropTypes.string,
      }),
    }),
  }),
  isLoading: PropTypes.bool.isRequired,
};

SignUpLayout.defaultProps = {
  data: null,
  error: null,
};

export default SignUpLayout;
