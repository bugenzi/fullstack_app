import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/index";
import { Provider } from "react-redux";
import "./assets/scss/base.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import LogRocket from 'logrocket';
LogRocket.init('htevu9/boktter');

ReactDOM.render(
  <Provider  store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorkerRegistration.register();