import PropTypes, { checkPropTypes } from "prop-types";

import FormInput from "../../../../commonComponents/FormInput";
import FormSelect from "../../../../commonComponents/FormSelect";

import FormInputPassword from "../../../../commonComponents/FormInputPassword";
import { ROUTE_NAMES } from "../../../../routes/RouteName";

import styles from "./styles.module.scss";

const RegistrationForm = ({
  formik,
  data,
  errorsResponce,
  // values,
  // errors,
  // onChange,
  // onBlur,
  // touched,
  // onSubmit,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>CREATE AN ACCOUNT</h1>

      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: 25,
        }}
      >
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

        <button type="submit">Submit</button>
      </form>
      {/*<form onSubmit={onSubmit} className={styles.form}>*/}
      {/*  <FormInput*/}
      {/*    name="email"*/}
      {/*    type="email"*/}
      {/*    errors={errors.email}*/}
      {/*    value={values.email}*/}
      {/*    onFormikChange={onChange}*/}
      {/*    onBlur={onBlur}*/}
      {/*    touched={touched.email}*/}
      {/*  />*/}

      {/*  <FormInputPassword*/}
      {/*    name="password"*/}
      {/*    errors={errors.password}*/}
      {/*    value={values.password}*/}
      {/*    onFormikChange={onChange}*/}
      {/*    onBlur={onBlur}*/}
      {/*    touched={touched.password}*/}
      {/*  />*/}

      {/*  <FormInput*/}
      {/*    name="firstName"*/}
      {/*    type="firstName"*/}
      {/*    errors={errors.firstName}*/}
      {/*    value={values.firstName}*/}
      {/*    onFormikChange={onChange}*/}
      {/*    onBlur={onBlur}*/}
      {/*    touched={touched.firstName}*/}
      {/*  />*/}

      {/*  <FormInput*/}
      {/*    name="lastName"*/}
      {/*    type="lastName"*/}
      {/*    errors={errors.lastName}*/}
      {/*    value={values.lastName}*/}
      {/*    onFormikChange={onChange}*/}
      {/*    onBlur={onBlur}*/}
      {/*    touched={touched.lastName}*/}
      {/*  />*/}

      {/*  <FormSelect*/}
      {/*    name="gender"*/}
      {/*    errors={errors.gender}*/}
      {/*    value={values.gender}*/}
      {/*    onFormikChange={onChange}*/}
      {/*    onBlur={onBlur}*/}
      {/*    touched={touched.gender}*/}
      {/*  />*/}

      {/*  <FormInput*/}
      {/*    name="phone"*/}
      {/*    type="phone"*/}
      {/*    errors={errors.phone}*/}
      {/*    value={values.phone}*/}
      {/*    onFormikChange={onChange}*/}
      {/*    onBlur={onBlur}*/}
      {/*    touched={touched.phone}*/}
      {/*  />*/}

      {/*  <div className={styles.buttons}>*/}
      {/*    <div className={styles.account}></div>*/}

      {/*    <button className={styles.button} type="submit">*/}
      {/*      SIGN UP*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*  <div className={styles.SignIn}>*/}
      {/*    <a className={styles.text} href={ROUTE_NAMES.SIGN_IN}>*/}
      {/*      Already have an account? Sign in*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</form>*/}
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
