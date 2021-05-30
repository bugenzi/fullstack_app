import React from "react";
import { Paper, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import icons from "./icons";
import { ButtonCustom } from "../common";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: "100%",
      width: "20%",
      padding: "0 30px",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        width: "20%",
      },
    },
    boxContainer: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
    },
    txtConvatiner: {
      paddingTop: "30px",
      marginTop: "30px",
      width: "100%",
      textAlign: "-webkit-center",
    },
    textDecoration: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "30px",
      listStyleType: "none",
      fontSize: 30,
      margin: "30px 0 30px 0",
      borderRadius: "30px",
      [theme.breakpoints.down("md")]: {
        width: "20%",
        fontSize: 20,
        flexDirection: "column-reverse",
      },
      linkTxt: {
        textDecoration: "none",
        color: "white",
      },
      "&:hover": {
        backgroundColor: "white",
        color: "red",
        transition: "ease 1s ",
      },
      linkTxt: {
        textDecoration: "none",
      },
      customBtn: {
        backgroundColor: "green",
        fontSize: 20,
        borderRadius: "30px",
        padding: "10px",
        marginBottom: "30px",
        [theme.breakpoints.down("md")]: {
          backgroundColor: "yellow",
          backgroundColor: "green",
        },
      },
    },
  };
});
export default function Navbar(props) {
  const { data, logoutHandling ,handleModal} = props;
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Box className={classes.boxContainer}>
        <ul className={classes.txtConvatiner}>
          {data.map((navdata, id) => {
            let Icon = icons[id];
            return (
              <Link key={id} to={navdata.path} className="link-txt-header">
                {" "}
                <li className={classes.textDecoration}>
                  {<Icon style={{ fontSize: 30, marginRight: "5px" }} />}
                  {navdata.title}
                </li>
              </Link>
            );
          })}
        </ul>
        <ButtonCustom
          text={"Post feed "}
          onClick={handleModal}
          styling={{
            backgroundColor: "white",
            fontSize: 20,
            borderRadius: "30px",
            padding: "10px",
            marginBottom: "30px",
          }}
          className={classes.customBtn}
        />
        <ButtonCustom
          text={"Logout "}
          onClick={logoutHandling}
          styling={{
            backgroundColor: "white",
            fontSize: 20,
            borderRadius: "30px",
            padding: "10px",
            marginBottom: "30px",
          }}
          className={classes.customBtn}
        />
      </Box>
    </Paper>
  );
}
