import PropTypes, { checkPropTypes } from "prop-types";
import RegistrationForm from "../RegistrationForm";
import Banner from "../../../../commonComponents/Banner";

import styles from "./styles.module.scss";

const SignUpLayout = ({ formik, data, errors }) => (
  <div className={styles.wrapper}>
    <Banner />
    <RegistrationForm formik={formik} data={data} errorsResponce={errors} />
  </div>
);

SignUpLayout.prototype = {
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  data: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SignUpLayout;
