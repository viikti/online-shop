import PropTypes from "prop-types";
import RegistrationForm from "../RegistrationForm";
import Banner from "../../../../commonComponents/Banner";

import styles from "./styles.module.scss";
import Spinner from "../../../../commonComponents/Spinner";
import SnackbarWithAlert from "../../../../commonComponents/Snackbar";

const SignUpLayout = ({
  values,
  isLoading,
  error,
  onChange,
  touched,
  onSubmit,
  onBlur,
  data,
  errors,
  formik,
}) => (
  <div className={styles.wrapper}>
    <Banner />

    {isLoading ? (
      <Spinner color="black" />
    ) : (
      <RegistrationForm formik={formik} data={data} errorsResponce={errors} />
    )}

    {data?.data.message && (
      <SnackbarWithAlert
        timeAlert={5000}
        textAlert={data.data.message}
        severity="success"
      />
    )}

    {error?.response.data.message && (
      <SnackbarWithAlert
        timeAlert={5000}
        textAlert={error?.response.data.message}
        severity="error"
      />
    )}
  </div>
);

SignUpLayout.prototype = {
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  data: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SignUpLayout;
