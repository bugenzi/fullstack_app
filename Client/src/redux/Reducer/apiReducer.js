import {
  LOGIN_IN_PROGRESS,
  LOGIN_COMPLETED,
  LOGIN_FAILD,
  GET_USER_INFO_COMPLETED,
  GET_USER_INFO_IN_PROGRESS,
  POST_NEW_USER_PROFILE_IN_PROGRESS,
  PATCH_USER_INFO_IN_PROGRESS,
  POST_NEW_USER_PROFILE_COMPLETED,
  GET_OTHER_USER_COMPLETED,
  GET_OTHER_USER_IN_PROGRESS,
  GET_FEEDS_IN_PROGRESS,
  POST_COMMENT_IN_PROGRESS,
} from "../../helpers/constant/reduxNames";


const initState = {
  auth: {
    // login in and getting logged data
    loginInProgress: false,
    loginCompleted: false,
    loginFaild:false,
    getUserInfoInProgress: false,
    // getting new registerd users
    postUserInfoInProgress: false,
    postUserInfoCompleted: false,
    // Patching user data
    patchUserInfoInProgress: false,

    // getting other users for viewing purposes
    getOtherUserInfoCompleted: false,
    getOtherUserInProgress: false,
  },
  trading: {
    getBooksInProgress: false,
    getTradesInProgress: false,
    postTradeInProgress: false,
  },
  feeds:{
    getFeedsInProgress:false,
    postCommentInProgress:false
  }
};

const apiReducer = (state = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case LOGIN_IN_PROGRESS:
      return {
        ...state,
        auth: { ...state.auth, loginInProgress: action.payload },
      };
    case LOGIN_COMPLETED: {
      return {
        ...state,
        auth: { ...state.auth, loginCompleted: action.payload },
      };
    }
    case LOGIN_FAILD: {
      return {
        ...state,
        auth: { ...state.auth, loginFaild: action.payload },
      };
    }

    case GET_USER_INFO_COMPLETED: {
      return {
        ...state,
        auth: { ...state.auth, getUserInfoInProgress: false },
      };
    }
    case GET_USER_INFO_IN_PROGRESS: {
      return {
        ...state,
        auth: { ...state.auth, getUserInfoInProgress: true },
      };
    }
    case POST_NEW_USER_PROFILE_IN_PROGRESS: {
      return {
        ...state,
        auth: { ...state.auth, postUserInfoInProgress: payload },
      };
    }
    case POST_NEW_USER_PROFILE_COMPLETED: {
      return {
        ...state,
        auth: { ...state.auth, postUserInfoCompleted: payload },
      };
    }
    case PATCH_USER_INFO_IN_PROGRESS: {
      return {
        ...state,
        auth: { ...state.auth, patchUserInfoInProgress: true },
      };
    }
    case GET_OTHER_USER_COMPLETED: {
      return {
        ...state,
        auth: { ...state.auth, getOtherUserInfoCompleted: action.payload },
      };
    }
    case GET_OTHER_USER_IN_PROGRESS: {
      return {
        ...state,
        auth: { ...state.auth, getOtherUserInProgress: action.payload },
      };
    }
    case POST_COMMENT_IN_PROGRESS: {
      return {
        ...state,
        auth: { ...state.feeds, getOtherUserInProgress: action.payload },
      };
    }
    
    default: {
      return state;
    }
  }
};
export default apiReducer;
