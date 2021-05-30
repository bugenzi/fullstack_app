import React, { useState, useEffect } from "react";
import UserProfileComponent from "./page-components/ProfileComponent";
import Error from "./page-components/ErrorComponent";
import { useParams } from "react-router-dom";
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

  const {
    user_object,
    getUserInfoInProgress
  } = props;
  const handleActiveTab = (event, value) => {
    setActive(value);
  };

  return (
    <div>
    
        <UserProfileComponent
          activeTab={tab}
          navigation={tabNavigation.navigation}
          handleActiveTab={handleActiveTab}
          isLoading={getUserInfoInProgress}
          userData={ user_object.user }
        />
     
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    // data for users
    user_object: state.auth.userInfo,
    // loaders
    getUserInfoInProgress: state.api.auth.getUserInfoInProgress,
    postUserInfoCompleted: state.api.auth.postUserInfoCompleted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOtherUsers: (userID) => dispatch(getOtherUsers(userID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
