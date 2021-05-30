import {
    SET_USER_AUTHENTICATION,
    SET_USER_INFO,
    LOGOUT,
    SET_OTHER_USER_DATA
} from "../../helpers/constant/reduxNames";

export const ACTION_SET_USER_AUTHENTICATION = (authentication) => { return { type: SET_USER_AUTHENTICATION, payload: authentication } };
export const ACTION_SET_USER_INFO = (userInfo) => { return { type: SET_USER_INFO, payload: userInfo } };
export const ACTION_LOGOUT = () => { return { type: LOGOUT } };

export const ACTION_SET_OTHER_USER_DATA = (userInfo) => { return { type: SET_OTHER_USER_DATA, payload: userInfo } };
