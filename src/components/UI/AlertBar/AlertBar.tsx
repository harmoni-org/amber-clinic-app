import React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface AlertBarProps {
  showAlert: boolean;
  severity: AlertColor | undefined;
  hideDuration: number | null;
  alertMessage: string;
  handleClose: () => void;
}

const AlertBar: React.FC<AlertBarProps> = ({
  showAlert,
  severity,
  hideDuration,
  alertMessage,
  handleClose,
}) => {
  const vertical = "top";
  const horizontal = "center";

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={showAlert}
        onClose={handleClose}
        key={vertical + horizontal}
        autoHideDuration={hideDuration}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default AlertBar;
