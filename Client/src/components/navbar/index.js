import React, { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useDeviceDetect } from "../common";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Actions/authActions";
import { postFeeds } from "../../redux/Actions/feedActions";
import { CustomDialog } from "../common";
import FeedPost from "../PostFeed";

const NavLink = [
  {
    title: "Home",
    path: "/home",
    icon: "HomeOutlined",
  },
  // {
  //   title: "About",
  //   path: "/about",
  //   icon: "InfoOutlined",
  // },
  {
    title: "Profile",
    path: "/myprofile",
    icon: "AccountCircleOutlined",
  },
  // {
  //   title: "Notifications",
  //   path: "/notifications",
  //   icon: "NotificationsOutlined",
  // },
];

export default function Navigation() {
  const { isMobile } = useDeviceDetect();
  const dispatch = useDispatch();
  const [modal, setmodal] = useState(false);
  const [post, setpost] = useState({
    postField: "",
  });

  const handleModal = () => {
    setmodal(!modal);
  };

  function logoutHandling() {
    dispatch(logout());
  }
  function handleSubmit() {
    dispatch(postFeeds(post.postField));
  }

  const handleInputChange = (e) => {
    setTimeout(() => {
      setpost({
        ...post,
        [e.target.name]: e.target.value,
      });
    }, 200);
 
  };

  return (
    <>
      {isMobile ? (
        <MobileNav
          handleModal={handleModal}
          data={NavLink}
          logoutHandling={logoutHandling}
        />
      ) : (
        <DesktopNav
          handleModal={handleModal}
          data={NavLink}
          logoutHandling={logoutHandling}
        />
      )}
      <CustomDialog open={modal} handleModal={handleModal} >
        <FeedPost
          handleSubmit={handleSubmit}
          handleModal={handleModal}
          handleInputChange={handleInputChange}
          exitButton={true}
        />
      </CustomDialog>
    </>
  );
}
