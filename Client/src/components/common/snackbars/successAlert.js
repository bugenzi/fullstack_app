// components/SuccessSnackbar.js or whatever you wanna call it

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import { CloseOutlined } from "@material-ui/icons";
import { clearSnackbar } from "../../../redux/Actions/alertAction";


export default function SuccessSnackbar(props) {
 const {successSnackbarMessage,successSnackbarOpen,handleClose} = props


  return (
    <Snackbar
      color="Success"
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={successSnackbarOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      aria-describedby="client-snackbar"
    >
      <Alert 
      style={{backgroundColor:"#4efc6b",color:"white"}}
      onClose={handleClose} severity="success">
        <span id="client-snackbar">{successSnackbarMessage}</span>
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
