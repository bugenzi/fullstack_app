
export const showSuccessSnackbar = message => {
    return dispatch => {
      dispatch({ type: "SNACKBAR_SUCCESS", message });
    };
  };
  export const showFailedSnackbar = message => {
    return dispatch => {
      dispatch({ type: "SNACKBAR_FAILD", message });
    };
  };
  
  export const clearSnackbar = () => {
    return dispatch => {
      dispatch({ type: "SNACKBAR_CLEAR" });
    };
  };