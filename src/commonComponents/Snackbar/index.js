import { PropTypes } from "prop-types";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";

const SnackbarWithAlert = ({ timeAlert, textAlert, severity }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={timeAlert}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {textAlert}
      </Alert>
    </Snackbar>
  );
};

SnackbarWithAlert.propTypes = {
  timeAlert: PropTypes.number.isRequired,
  textAlert: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
};

export default SnackbarWithAlert;
