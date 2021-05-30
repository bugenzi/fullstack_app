import { api } from "../../api/apiMethods";

import {
  ACTION_SET_USER_AUTHENTICATION,
  ACTION_SET_USER_INFO,
  ACTION_SET_OTHER_USER_DATA,
} from "../ActionList/authActionList";

import {
  loginInProgress,
  loginCompleted,
  loginFailed,
  getUserInfoCompleted,
  getUserInfoInProgress,
  postNewUserInProgress,
  postNewUserCompleted,
  postOtherUserComplete,
  postOtherUserInProgress,
} from "../Actions/apiActions";

import {
  showSuccessSnackbar,
  showFailedSnackbar,
} from "../Actions/alertAction";

import {
  removeAccessToken,
  setAccesToken,
} from "../../helpers/localStorageHelper";

export const login = (email, passoword) => {
  return (dispatch, getState) => {
    api
      .login(email, passoword)
      .then((res) => {
        dispatch(loginInProgress(true));
        dispatch(loginCompleted(true));
        setAccesToken(res.data.data.token);
        dispatch(ACTION_SET_USER_AUTHENTICATION(true));
        dispatch(getUserInfoInProgress());

        return api.getUserInfo();
      })
      .then((res) => {
        dispatch(getUserInfoCompleted());
        dispatch(ACTION_SET_USER_INFO(res.data));
        dispatch(loginInProgress(false));
        dispatch(showSuccessSnackbar("Success you have been logged in"));
        dispatch(loginFailed(false));
        dispatch(getUserInfoCompleted());
        dispatch(ACTION_SET_USER_INFO(res.data));
        dispatch(loginCompleted(true));
      })
      .catch((err) => {
        dispatch(loginInProgress(false));
        dispatch(loginFailed(true));
        dispatch(showFailedSnackbar("Failed to login "));
        dispatch(loginCompleted(false));
      });
  };
};

export const register = (username, email, passoword) => {
  return (dispatch, getState) => {
    dispatch(postNewUserInProgress(true));
    api
      .register(username, email, passoword)
      .then(() => {
        dispatch(postNewUserInProgress(false));
        dispatch(showSuccessSnackbar("Success you have registered account "));
      })
      .catch((err) => {
        dispatch(postNewUserInProgress(false));
        dispatch(postNewUserCompleted(false));
        dispatch(showFailedSnackbar("Failed to register "));
   
      });
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    dispatch(ACTION_SET_USER_INFO(null));
    removeAccessToken();
    dispatch(ACTION_SET_USER_AUTHENTICATION(false));
    dispatch(loginCompleted(false));
  };
};
export const getOtherUsers = (userID) => {
  return (dispatch, getState) => {
    dispatch(postOtherUserInProgress(true));

    api
      .getOtherUsers(userID)
      .then((res) => {
        dispatch(ACTION_SET_OTHER_USER_DATA(res.data));
        dispatch(postOtherUserComplete(true));
        dispatch(postOtherUserInProgress(false));
      })
      .catch((er) => {
        dispatch(showFailedSnackbar("Failed to login "));
        dispatch(postOtherUserComplete(false));
      });
  };
};
