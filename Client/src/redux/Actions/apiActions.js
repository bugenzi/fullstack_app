import {
  ACTION_LOGIN_IN_PROGRESS,
  ACTION_LOGIN_COMPLETED,
  ACTION_LOGIN_FAILD,
  ACTION_GET_USER_INFO_IN_PROGRESS,
  ACTION_GET_USER_INFO_COMPLETED,
  ACTION_POST_NEW_USER_PROFILE_IN_PROGRESS,
  ACTION_POST_NEW_USER_PROFILE_COMPLETED,
  ACTION_GET_OTHER_USER_COMPLETED,
  ACTION_GET_OTHER_USER_IN_PROGRESS,
  ACTION_GET_FEEDS_IN_PROGRESS,
  ACTION_POST_COMMENTS_IN_PROGRESS
} from "../ActionList/apiActionsList";

export const loginInProgress = (state) => {
  return (dispatch, getState) => {
    dispatch(ACTION_LOGIN_IN_PROGRESS(state));
  };
};
export const loginCompleted = (state) => {
  return (dispatch, getState) => {
    dispatch(ACTION_LOGIN_COMPLETED(state));
  };
};
export const loginFailed = (state) => {
  return (dispatch, getState) => {
    dispatch(ACTION_LOGIN_FAILD(state));
  };
};
export const getUserInfoInProgress = () => {
  return (dispatch, getState) => {
    dispatch(ACTION_GET_USER_INFO_IN_PROGRESS());
  };
};
export const getUserInfoCompleted = () => {
  return (dispatch, getState) => {
    dispatch(ACTION_GET_USER_INFO_COMPLETED());
  };
};

export const postNewUserInProgress = (state) => {
  return (dispatch, getState) => {
    dispatch(ACTION_POST_NEW_USER_PROFILE_IN_PROGRESS(state));
  };
};

export const postNewUserCompleted = (state) => {
  return (dispatch, getState) => {
    dispatch(ACTION_POST_NEW_USER_PROFILE_COMPLETED(state));
  };
};

export const postOtherUserInProgress = (state) => {
  return (dispatch, getState) => {
    dispatch(ACTION_GET_OTHER_USER_IN_PROGRESS(state));
  };
};
export const postOtherUserComplete = (state) => {
  return (dispatch, getState) => {
    dispatch(ACTION_GET_OTHER_USER_COMPLETED(state));
  };
};
export const postCommentInProgress = (state) => {
  return (dispatch, getState) => {
    dispatch(ACTION_POST_COMMENTS_IN_PROGRESS(state));
  };
};
