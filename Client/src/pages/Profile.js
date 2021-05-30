import React, { useState, useEffect } from "react";
import UserProfileComponent from "./page-components/ProfileComponent";
import { useParams,Redirect } from "react-router-dom";
import { getOtherUsers } from "../redux/Actions/authActions";
import { connect } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
const tabNavigation = {
  navigation: [
    { name: "Posts and comments", index: 0 },
    { name: "Books", index: 1 },
  ],
};

function UserProfile(props) {
  const [tab, setActive] = useState(0);
  const [redirect, setRedirect] = useState(false);

  const {
    user_object,
    getOtherUserInProgress,
    getOtherUserInfoCompleted,
  } = props;
  const handleActiveTab = (event, value) => {
    setActive(value);
  };
  const { id } = useParams();

  useEffect(() => {
 
    try {
      if(props.my_user_object.user._id===id){
        setRedirect(true)
      }else {
      return  props.getOtherUsers(id);
      }
    } catch (error) {
      console.log(error)
    }
  }, [id]);


  if(redirect){
    return (<Redirect to="/myprofile"/>)
  }
  return ( 
    <div>
      {getOtherUserInfoCompleted && user_object && !getOtherUserInProgress ? (
        <UserProfileComponent
          activeTab={tab}
          navigation={tabNavigation.navigation}
          handleActiveTab={handleActiveTab}
          isLoading={getOtherUserInProgress}
          userData={getOtherUserInfoCompleted ? user_object.userData : ""}
        />
      ) : (
        <Skeleton />
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    // data for users
    user_object: state.auth.otherUserInfo,
    my_user_object: state.auth.userInfo,
    // loaders
    getOtherUserInfoCompleted: state.api.auth.getOtherUserInfoCompleted,
    getOtherUserInProgress: state.api.auth.getOtherUserInProgress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOtherUsers: (userID) => dispatch(getOtherUsers(userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
