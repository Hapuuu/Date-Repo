import { Box, Snackbar, Typography } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { Dispatch, SetStateAction } from "react";
import CloseIcon from "@material-ui/icons/Close";

interface SnackbarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  errorMessage: string;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ErrorSnackbar(props: SnackbarProps) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Snackbar
      open={props.open}
      autoHideDuration={3000}
      onClose={handleClose}
      style={{ borderRadius: "4px", bottom: "60px" }}
    >
      <Alert severity="error">
        <Box display={"flex"} flexDirection={"row"}>
          <Typography>{props.errorMessage}</Typography>
          <Box onClick={handleClose}>
            <CloseIcon />
          </Box>
        </Box>
      </Alert>
    </Snackbar>
  );
}
