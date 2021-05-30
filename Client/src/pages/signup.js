import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../redux/Actions/authActions";
import SignUpComponent from "./page-components/SignUpComponent";


function SignUp(props) {
  const history = useHistory();
  const [registerData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (props.postUserInfoCompleted===true) {
      history.push("/signin");
    }
  }, [props.postUserInfoCompleted]);

  const handleChange = (e) => {
    setLoginData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    let { username, email, password } = registerData;

    props.register(username, email, password);
  };

  return (
    <>
      <SignUpComponent
        data={registerData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        isLoadingButton={true}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    postUserInfoInProgress: state.api.auth.postUserInfoInProgress,
    postUserInfoCompleted: state.api.auth.postUserInfoCompleted,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    register: (username, email, password) =>
      dispatch(register(username, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
