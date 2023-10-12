import PropTypes from "prop-types";
import Banner from "../../../../commonComponents/Banner";

import styles from "./styles.module.scss";
import SignInForm from "../SignInForm";
import Spinner from "../../../../commonComponents/Spinner";
import SnackbarWithAlert from "../../../../commonComponents/Snackbar";

const SignInView = ({
  form,
  error,
  handleChange,
  handleSubmit,
  isAuth,
  isLoading,
}) => (
  <div className={styles.wrapper}>
    <Banner />
    <SignInForm
      form={form}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
    {isLoading && <Spinner color="black" />}

    {isAuth && (
      <SnackbarWithAlert
        timeAlert={2000}
        textAlert="You successfully log in. We are glad to welcome you to your store"
        severity="success"
      />
    )}

    {/*{error && (*/}
    {/*  <SnackbarWithAlert*/}
    {/*    timeAlert={3000}*/}
    {/*    textAlert={error.message}*/}
    {/*    severity="error"*/}
    {/*  />*/}
    {/*)}*/}
  </div>
);

SignInView.propTypes = {
  form: PropTypes.objectOf(PropTypes.string).isRequired,
  error: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleNotification: PropTypes.func.isRequired,
};

export default SignInView;
