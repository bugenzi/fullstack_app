import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
// import Avatar from '@material-ui/core/Avatar';
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { ChatBubbleOutline } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Link } from "react-router-dom";
import { parseDate } from "../../helpers/dataParser";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    marginTop: "10%",
    marginBottom: "10%",
    margin: "auto",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  icons: {
    color: "white",
  },

  contentStyling: {
    padding: "20px",
    backgroundColor: "white",
  },
  paragraph: {
    padding: "30px",
    fontSize: "1.58em !important",
    color: "black",
    wordBreak: "all",
  },
}));
export default function Postfeed(props) {
  const { userName, postInput, userId, comments, date, comment } = props.data;
  const { handleModal, commentAction } = props;
  const classes = useStyles();
  let formatedDate = parseDate(date);
  return (
    <Card className={classes.root}>
      <Link
        style={{
          textDecoration: "none",
          color: "white",
        }}
        to={`/profile/${userId}`}
      >
        <CardHeader
          action={
            <IconButton className={classes.icons} aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={userName}
          subheader={formatedDate}
        />
      </Link>

      <CardContent className={classes.contentStyling}>
        <Typography className={classes.paragraph} variant="body1" component="p">
          {postInput || comment}
        </Typography>

        {commentAction ? (
          <>
            <Divider light={true} className={classes.icons} />
            <CardActions disableSpacing>
              <IconButton
                onClick={handleModal}
                className={classes.icons}
                aria-label="add to favorites"
              >
                <Badge
                  badgeContent={comments ? comments.length : 0}
                  color="secondary"
                >
                  {" "}
                  <ChatBubbleOutline />
                </Badge>
              </IconButton>
            </CardActions>
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}
