import { memo, useState, useCallback } from "react";
import PropTypes, { checkPropTypes } from "prop-types";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const FormInputPassword = ({
  name,
  value,
  errors,
  touched,
  onBlur,
  onFormikChange,
}) => {
  const [valuePassword, setValuePassword] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = useCallback(() => {
    setValuePassword({
      ...valuePassword,
      showPassword: !valuePassword.showPassword,
    });
  }, [valuePassword]);

  return (
    <FormControl variant="standard">
      <InputLabel color={errors ? "error" : "success"}>
        {errors && touched ? `Password: ${errors}` : "Password"}
      </InputLabel>

      <Input
        name={name}
        autoComplete="off"
        type={valuePassword.showPassword ? "text" : "password"}
        color={errors ? "error" : "success"}
        value={value}
        onChange={onFormikChange}
        onBlur={onBlur}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword}>
              {valuePassword.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

FormInputPassword.prototype = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.string,
  value: PropTypes.string.isRequired,
  onFormikChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool,
};

FormInputPassword.defaultProps = {
  errors: undefined,
  touched: undefined,
};

export default FormInputPassword;
