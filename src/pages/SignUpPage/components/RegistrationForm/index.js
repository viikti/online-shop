import { NavLink } from "react-router-dom";
import PropTypes, { checkPropTypes } from "prop-types";

import FormInput from "../../../../commonComponents/FormInput";
import FormSelect from "../../../../commonComponents/FormSelect";

import FormInputPassword from "../../../../commonComponents/FormInputPassword";
import { ROUTE_NAMES } from "../../../../routes/RouteName";

import styles from "./styles.module.scss";

const RegistrationForm = ({
  values,
  errors,
  onChange,
  onBlur,
  touched,
  onSubmit,
}) => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>CREATE AN ACCOUNT</h1>

    <form onSubmit={onSubmit} className={styles.form}>
      <FormInput
        name="email"
        type="email"
        errors={errors.email}
        value={values.email}
        onFormikChange={onChange}
        onBlur={onBlur}
        touched={touched.email}
      />

      <FormInputPassword
        name="password"
        errors={errors.password}
        value={values.password}
        onFormikChange={onChange}
        onBlur={onBlur}
        touched={touched.password}
      />

      <FormInput
        name="firstName"
        type="firstName"
        errors={errors.firstName}
        value={values.firstName}
        onFormikChange={onChange}
        onBlur={onBlur}
        touched={touched.firstName}
      />

      <FormInput
        name="lastName"
        type="lastName"
        errors={errors.lastName}
        value={values.lastName}
        onFormikChange={onChange}
        onBlur={onBlur}
        touched={touched.lastName}
      />

      <FormSelect
        name="gender"
        errors={errors.gender}
        value={values.gender}
        onFormikChange={onChange}
        onBlur={onBlur}
        touched={touched.gender}
      />

      <FormInput
        name="phone"
        type="phone"
        errors={errors.phone}
        value={values.phone}
        onFormikChange={onChange}
        onBlur={onBlur}
        touched={touched.phone}
      />

      <div className={styles.buttons}>
        <div className={styles.account}></div>

        <button className={styles.button} type="submit">
          SIGN UP
        </button>
      </div>
      <div className={styles.SignIn}>
        <a className={styles.text} href={ROUTE_NAMES.SIGN_IN}>
          Already have an account? Sign in
        </a>
      </div>
    </form>
  </div>
);

RegistrationForm.prototype = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm;
