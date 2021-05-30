import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import authReducer from "./authReducer";
import apiReducer from "./apiReducer";
import alertReducer from "./alertReducer";
import feedReducer from "./feedReducer";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["isUserAuthenticated", "userInfo"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  api: apiReducer,
  alert: alertReducer,
  feed:feedReducer
});
export default rootReducer;
