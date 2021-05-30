// components/SuccessSnackbar.js or whatever you wanna call it

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import { handleClose } from "@material-ui/icons";


export default function WarningSnackbar(props) {
const {errorSnackbarMessage,errorSnackbarOpen,handleClose} = props





  return (
    <Snackbar
      color="Success"
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={errorSnackbarOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      aria-describedby="client-snackbar"
    >
      <Alert
        style={{ backgroundColor: "red", color: "white" }}
        onClose={handleClose}
        severity="success"
      >
        <span id="client-snackbar">{errorSnackbarMessage}</span>
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        ></IconButton>
      </Alert>
    </Snackbar>
  );
}
