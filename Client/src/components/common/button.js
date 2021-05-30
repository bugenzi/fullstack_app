import React from "react";
import { Button } from "@material-ui/core";
import { CheckBox} from "@material-ui/icons"

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor:"yellow",
    "&:hover": {
      backgroundColor:"yellow",
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));
export default function ButtonCustom(props) {
  const {
    text,
    color,
    styling,
    typeOfLine,
    onClick,
    onSubmit,
    isLoadingButton,
    loading,
    success,

  } = props;

  const classes = useStyles();

  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });
  console.log("success",success);

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <>
      {isLoadingButton ? (
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          style={{ ...styling } || null}
          disabled={loading}
          onClick={onClick}
        >
       
          {success?  <CheckBox/>:  text }
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </Button>
      ) : (
        <Button
          variant={typeOfLine || "outlined"}
          color={color || "secondary"}
          style={{ ...styling } || null}
          onClick={onClick || null}
          onSubmit={onSubmit || null}
        >
          {/*  */}
          
          {text || "Dummy text "}
        </Button>
      )}
    </>
  );
}
