import React from "react";
import {
  makeStyles,
  Card,
  Paper,
  Avatar,
  Typography,
  Tab,
  TextField,
} from "@material-ui/core";
import { CustomFeedView, Tabs, ButtonCustom } from "../../components/common";
import Skeleton from "@material-ui/lab/Skeleton";
import Feeds from "../../components/feeds";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 945,
    marginTop: "10%",
    marginBottom: "10%",
    margin: "auto",
    background: " rgba( 255, 255, 255, 0.25 )  !important",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 ) !important",
    backdropFilter: "blur(4px)",
    borderRadiouse: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )  !important",
    display: "flex",
    // padding: "10px",
    justifyContent: "spave-evenly",
    height: "100%",
    minHeight: "600px",
    maxHeight: 900,
    [theme.breakpoints.down("md")]: {
      diplay: "flex",
      flexWrap: "wrap",
      margin: "auto",
      padding: "30px",
      maxHeight: "auto",
    },
  },
  userContainer: {
    padding: "30px",
    maxWidth: 260,
    // width:"100%",
    marginRight: "1rem",
    // background: " rgba( 255, 255, 255, 0.75 )  !important",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)  !important",
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      marginBottom: "5rem",

      width: "100%",
    },
  },
  userAvatar: {
    margin: "auto",
    width: "150px !important",
    height: "150px !important",
    marginBottom: "10px",
    fontSize: "50px !important",
  },
  userContainerText: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)  !important",
    padding: "30px",
    color: "white !important",
  },
  postContainer: {
    background: " rgba( 255, 255, 255, 0.25 )  !important",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 ) !important",
    backdropFilter: "blur(4px)",
    borderRadiouse: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )  !important",
    width: "100%",
    height: "100%",
    OverflowY: "revert",
    Overflowx: "hidden",
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      overflow: "scroll",
    },
  },
  textBold: {
    fontWeight: 900,
    color: "white",
  },
}));

export default function UserProfileComponent(props) {
  const {
    activeTab,
    navigation,
    handleActiveTab,
    isLoading,
    loadingCompleted,
    inProgress,
  } = props;

  const { username, name, description, posts } = props.userData;

  const classes = useStyles();

  return (
    // Left side of the userprofile
    <Paper
      style={{ clipPath: "clip-path: polygon(0 0, 100% 0, 100% 39%, 0% 100%)" }}
      elevation={9}
      className={classes.root}
    >
      <Paper className={classes.userContainer}>
        <Avatar className={classes.userAvatar}>{username[0]}</Avatar>

        <h1 className={classes.textBold}>{username}</h1>
        <h2>{name}</h2>
        <Typography>{description ? description : ""}</Typography>
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={9}
          defaultValue="Hard kodiran podatakza sada "
          variant="filled"
          
          InputProps={{
            readOnly: true,
          }}
        />
      </Paper>

      {/* Right side of the userprofile */}
      <Paper className={classes.postContainer}>
        <Tabs value={activeTab} onChange={handleActiveTab}>
          {navigation.map((item) => {
            return <Tab key={item.index} label={item.name} />;
          })}
        </Tabs>
        {activeTab === 0 && (
          <div
            style={{
              height: "600px",
              overflow: "scroll",
            }}
          >
            {posts.map((data, index) => {
              return <Feeds data={data} key={index} />;
            })}{" "}
          </div>
        )}
        {activeTab === 1 && (
          <div
            style={{
              height: "600px",
              overflow: "scroll",
            }}
          >
            Work in progress
          </div>
        )}
      </Paper>
    </Paper>
  );
}
