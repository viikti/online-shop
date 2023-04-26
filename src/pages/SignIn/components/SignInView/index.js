import PropTypes from "prop-types";
import Banner from "../../../../commonComponents/Banner";

import styles from "./styles.module.scss";
import SignInForm from "../SignInForm";

const SignInView = ({
  form,
  error,
  handleChange,
  handleSubmit,
  // handleNotification,
}) => (
  <div className={styles.wrapper}>
    <Banner />
    <SignInForm
      form={form}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
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
