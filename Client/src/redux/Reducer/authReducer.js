import {
  SET_USER_AUTHENTICATION,
  SET_USER_INFO,
  LOGOUT,
  SET_OTHER_USER_DATA,
} from "../../helpers/constant/reduxNames";
const initState = {
  isUserAuthenticated: false,
  userInfo: null,
  otherUserInfo: null,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_AUTHENTICATION: {
      return {
        ...state,
        isUserAuthenticated: action.payload,
      };
    }
    case SET_USER_INFO: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }

    case LOGOUT: {
      return {
        ...initState,
      };
    }

    case SET_OTHER_USER_DATA: {
      return {
        ...state,
        otherUserInfo: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
