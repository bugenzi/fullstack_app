import {
  LOGIN_COMPLETED,
  LOGIN_IN_PROGRESS,
  LOGIN_FAILD,
  GET_USER_INFO_IN_PROGRESS,
  GET_USER_INFO_COMPLETED,
  POST_NEW_USER_PROFILE_IN_PROGRESS,
  POST_NEW_USER_PROFILE_COMPLETED,
  GET_OTHER_USER_COMPLETED,
  GET_OTHER_USER_IN_PROGRESS,
  GET_FEEDS_IN_PROGRESS,
  POST_FEEDS_IN_PROGRESS,
  POST_COMMENT_IN_PROGRESS
  
  
} from "../../helpers/constant/reduxNames";

// Login in
export const ACTION_LOGIN_IN_PROGRESS = (state) => {
  return { type: LOGIN_IN_PROGRESS, payload: state };
};

export const ACTION_LOGIN_COMPLETED = (state) => {
  return { type: LOGIN_COMPLETED, payload: state };
};
export const ACTION_LOGIN_FAILD = (state) => {
  return { type: LOGIN_FAILD, payload: state };
};
// Geting users info
export const ACTION_GET_USER_INFO_IN_PROGRESS = () => {
  return {
    type: GET_USER_INFO_IN_PROGRESS,
  };
};
export const ACTION_GET_USER_INFO_COMPLETED = () => {
  return {
    type: GET_USER_INFO_COMPLETED,
  };
};
// Get other users info
// 
export const ACTION_GET_OTHER_USER_IN_PROGRESS = (state) => {
  return { type: GET_OTHER_USER_IN_PROGRESS, payload: state };
};
export const ACTION_GET_OTHER_USER_COMPLETED = (state) => {
  return { type: GET_OTHER_USER_COMPLETED, payload: state };
};


// Posting users
// 
export const ACTION_POST_NEW_USER_PROFILE_IN_PROGRESS = (state) => {
  return {
    type: POST_NEW_USER_PROFILE_IN_PROGRESS,
    payload: state,
  };
};
export const ACTION_POST_NEW_USER_PROFILE_COMPLETED = (state) => {
  return {
    type: POST_NEW_USER_PROFILE_COMPLETED,
    payload: state,
  };
};

// Feeds and comments
// 
export const ACTION_GET_FEEDS_IN_PROGRESS = (state) => {
  return {
    type: GET_FEEDS_IN_PROGRESS,
    payload: state,
  };
};
export const ACTION_POST_FEEDS_IN_PROGRESS = (state) => {
  return {
    type: POST_FEEDS_IN_PROGRESS,
    payload: state,
  };
};
export const ACTION_POST_COMMENTS_IN_PROGRESS = (state) => {
  return {
    type: POST_COMMENT_IN_PROGRESS,
    payload: state,
  };
};

