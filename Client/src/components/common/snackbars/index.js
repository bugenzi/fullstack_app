// components/SuccessSnackbar.js or whatever you wanna call it
import { useDispatch, useSelector } from "react-redux";
import { clearSnackbar } from "../../../redux/Actions/alertAction";
import SuccessSnackbar from "./successAlert";
import WarningSnackbar from "./warningAlert";

const handleSnackbars = (
  errorSnackbarOpen,
  successSnackbarOpen,
  errorSnackbarMessage,
  successSnackbarMessage,
  handleClose

) => {
  if (successSnackbarOpen) {
    return (
      <SuccessSnackbar
        successSnackbarMessage={successSnackbarMessage}
        successSnackbarOpen={successSnackbarOpen}
        handleClose={handleClose}
    
      />
    );
  } else if (errorSnackbarOpen) {
    return (
      <WarningSnackbar
        errorSnackbarMessage={errorSnackbarMessage}
        errorSnackbarOpen={errorSnackbarOpen}
        handleClose={handleClose}

  
      />
    );
  }
};
export default function Snackbar() {
  const dispatch = useDispatch();

  const {
    successSnackbarMessage,
    successSnackbarOpen,
    errorSnackbarOpen,
    errorSnackbarMessage,
  } = useSelector((state) => state.alert);


  function handleClose() {
    dispatch(clearSnackbar());
  }
  
  return (
    <>
      {handleSnackbars(
        errorSnackbarOpen,
        successSnackbarOpen,
        errorSnackbarMessage,
        successSnackbarMessage,
        handleClose
      )}
    </>
  );
}
