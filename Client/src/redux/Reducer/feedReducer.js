import {
SET_FEEDS,
SET_COMMENT
} from "../../helpers/constant/reduxNames";
  const initState = {
    feedsData: null,
    feedComments:null

  };
  
  export const feedReducer = (state = initState, action) => {
    switch (action.type) {
      case SET_FEEDS: {
        return {
          ...state,
          feedsData: action.payload,
        };
      }
  
      case SET_COMMENT: {
        return {
          ...state,
          feedsData: action.payload,
        };
      }
  
      default: {
        return state;
      }
    }
  };
  
  export default feedReducer;
  