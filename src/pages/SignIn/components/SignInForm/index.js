import FormInput from "../../../../commonComponents/FormInput";
import FormInputPassword from "../../../../commonComponents/FormInputPassword";
import { ROUTE_NAMES } from "../../../../routes/RouteName";

import styles from "./styles.module.scss";

const SingInForm = ({ form, error, handleChange, handleSubmit }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.subtitle}>Welcome back</h2>
      <h1 className={styles.title}>Login to Your Account</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <FormInput
          variant="standard"
          name="email"
          type="email"
          // value={email}
          onFormikChange={handleChange}
        />

        <FormInputPassword
          name="password"
          // value={password}
          type="password"
          onFormikChange={handleChange}
        />

        <button type="submit" className={styles.button}>
          Sign In
        </button>
      </form>

      <div className={styles.register}>
        <a className={styles.link} href={ROUTE_NAMES.SIGN_UP}>
          Create an account
        </a>
      </div>
    </div>
  );
};
export default SingInForm;
