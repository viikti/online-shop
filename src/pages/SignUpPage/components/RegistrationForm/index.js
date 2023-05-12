import PropTypes, { checkPropTypes } from "prop-types";

import FormInput from "../../../../commonComponents/FormInput";
import FormSelect from "../../../../commonComponents/FormSelect";

import FormInputPassword from "../../../../commonComponents/FormInputPassword";
import { ROUTE_NAMES } from "../../../../routes/RouteName";

import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";

const RegistrationForm = ({
  formik,
  data,
  errorsResponce,
  values,
  errors,
  onChange,
  onBlur,
  touched,
  onSubmit,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>CREATE AN ACCOUNT</h1>

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div style={{ color: "red" }}>{formik.errors.firstName}</div>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div style={{ color: "red" }}>{formik.errors.lastName}</div>
        )}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}

        <label htmlFor="password"> Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        )}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div style={{ color: "red" }}>{formik.errors.confirmPassword}</div>
        )}

        <label htmlFor="gender"> Gender</label>
        <input
          id="gender"
          name="gender"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gender}
        />
        {formik.touched.gender && formik.errors.gender && (
          <div style={{ color: "red" }}>{formik.errors.gender}</div>
        )}
        <label htmlFor="phone"> Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div style={{ color: "red" }}>{formik.errors.phone}</div>
        )}

        <div className={styles.buttons}>
          <button className={styles.button} type="submit">
            SIGN UP
          </button>
        </div>
        <div className={styles.buttons}>
          <NavLink to={ROUTE_NAMES.SIGN_IN} className={styles.buttonSignIn}>
            Sign in
          </NavLink>
        </div>
      </form>
    </div>
  );
};

RegistrationForm.prototype = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm;
