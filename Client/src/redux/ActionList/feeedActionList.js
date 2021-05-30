import {
    SET_FEEDS,
    SET_COMMENT
  } from "../../helpers/constant/reduxNames";


export const ACTION_SET_FEEDS = (state) => {
    return {
      type: SET_FEEDS,
      payload: state,
    };
  };
export const ACTION_SET_COMMENT = (state) => {
    return {
      type: SET_COMMENT,
      payload: state,
    };
  };