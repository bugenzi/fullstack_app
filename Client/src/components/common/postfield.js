import React from "react";
import {
  TextField,
  makeStyles,
  Card,
  CardHeader,
  Avatar,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { ButtonCustom } from "../common";

const useStyles = makeStyles((theme) => {
  return {

    header: {
      background: "linear-gradient(45deg, #f73d65 30%, #fd691c 90%)",
      color: "white",
      fontSize: "20px !important",
    },
  };
});
export default function PostFeeds(props) {
  const classes = useStyles();
  const { handleInputChange, handleModal, exitButton, handleSubmit } = props;
  const { username } = useSelector((state) => state.auth.userInfo.user);

  return (
    <>
      <CardHeader
        className={classes.header}
        avatar={<Avatar />}
        title={<Typography>{username}</Typography>}
      />

      <TextField
        onChange={handleInputChange}
        name="postField"
        id="filled-multiline-static"
        label="Post"
        multiline
        rows={9}
        fullWidth
        defaultValue="Write a post "
        variant="filled"
        color="secondary"
      />

      {exitButton ? (
        <ButtonCustom
          variant="outlined"
          onClick={handleModal}
          styling={{
            backgroundColor: "white",
            fontSize: 15,
            borderRadius: "10x",
            padding: "10px",
          }}
          text="Exit "
        />
      ) : null}
      <ButtonCustom
        variant="outlined"
        onClick={handleSubmit}
        styling={{
          backgroundColor: "white",
          fontSize: 15,
          borderRadius: "10x",
          padding: "10px",
        }}
        text="Send "
      />

      {/* </Card> */}
    </>
  );
}
