import startCase from "lodash/startCase";
import PropTypes, { checkPropTypes } from "prop-types";

import TextField from "@mui/material/TextField";

const FormInput = ({
  name,
  type,
  errors,
  value,
  onFormikChange,
  onBlur,
  touched,
}) => (
  <TextField
    variant="standard"
    name={name}
    type={type}
    value={value}
    color={errors ? "error" : "success"}
    label={
      errors && touched ? `${startCase(name)}: ${errors}` : startCase(name)
    }
    onChange={onFormikChange}
    onBlur={onBlur}
  />
);

FormInput.prototype = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errors: PropTypes.string,
  value: PropTypes.string.isRequired,
  onFormikChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool,
};

FormInput.defaultProps = {
  errors: undefined,
  touched: undefined,
};

export default FormInput;
