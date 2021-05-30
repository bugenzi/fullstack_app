import { api } from "../../api/apiMethods";

import {
  ACTION_GET_FEEDS_IN_PROGRESS,
  ACTION_POST_FEEDS_IN_PROGRESS,
  ACTION_POST_COMMENTS_IN_PROGRESS,
} from "../ActionList/apiActionsList";
import {
  ACTION_SET_FEEDS,
  ACTION_SET_COMMENT,
} from "../ActionList/feeedActionList";
import { ACTION_SET_USER_INFO } from "../ActionList/authActionList";

import {
  showSuccessSnackbar,
  showFailedSnackbar,
} from "../Actions/alertAction";

export const getFedds = () => {
  return (dispatch, getState) => {
    dispatch(ACTION_GET_FEEDS_IN_PROGRESS(true));
    api
      .getFeeds()
      .then((res) => {
        dispatch(ACTION_SET_FEEDS(res.data));
        dispatch(ACTION_GET_FEEDS_IN_PROGRESS(false));
      })
      .catch((err) => {
        console.log("error message ", err);
      });
  };
};

export const postFeeds = (input) => {
  return (dispatch, getState) => {
    dispatch(ACTION_POST_FEEDS_IN_PROGRESS(true));
    api
      .postFeed(input)
      .then(() => {
        dispatch(ACTION_POST_FEEDS_IN_PROGRESS(false));
      })
      .then(() => {
        return api.getFeeds().then((res) => {
          dispatch(ACTION_POST_FEEDS_IN_PROGRESS(false));
          dispatch(ACTION_SET_FEEDS(res.data));
          dispatch(showSuccessSnackbar("Posted a boktter"));
        });
      })
      .then(() => {
        return api.getUserInfo().then((res) => {
          dispatch(ACTION_SET_USER_INFO(res.data));
        });
      })
      .catch((err) => {
        dispatch(showFailedSnackbar("Cant send a message like that  "));
      });
  };
};

export const postComment = (id, comment) => {
  return (dispatch, getState) => {
    dispatch(ACTION_POST_COMMENTS_IN_PROGRESS(true));
    api
      .postComment(id, comment)
      .then((res) => {
        dispatch(showSuccessSnackbar("Posted a comment"));
        dispatch(ACTION_POST_COMMENTS_IN_PROGRESS(false));
        return api.getFeeds().then((res) => {
          dispatch(ACTION_POST_FEEDS_IN_PROGRESS(false));
          dispatch(ACTION_SET_FEEDS(res.data));
          dispatch(showSuccessSnackbar("Posted a boktter"))
        
        }).catch(()=>{
          dispatch(showFailedSnackbar("Cant send a message like that  "));
        })
      })
      .catch(() => {
        dispatch(showFailedSnackbar("Cant send a message like that  "));
      });
  };
};
