import React, { useState } from "react";
import SignInComponent from "./page-components/SignInComponent";
import { connect } from "react-redux";
import { login } from "../redux/Actions/authActions";


function SignIn(props) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    let { email, password } = loginData;
    props.login(email, password);
  };

 
  // const text = useSelector(state => state.text.value)

  return (
    <>
      <SignInComponent
        data={loginData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        apiProgress={props.loginInProgress}
        loginCompleted={props.loginCompleted}
        loginFaild={props.loginFaild}
        isLoadingButton={true}
      />

    </>
  );
}
const mapStateToProps = (state) => {
  return {
    loginInProgress: state.api.auth.loginInProgress,
    isUserAuthenticated: state.auth.isUserAuthenticated,
    loginCompleted: state.api.auth.loginCompleted,
    loginFaild: state.api.auth.loginFaild,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
