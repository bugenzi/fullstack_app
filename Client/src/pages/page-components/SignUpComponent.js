
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from '@material-ui/core/Link';
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ButtonCustom ,Test} from "../../components/common";



const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },  
  root2:{
    margin:"auto !important",
    [theme.breakpoints.down("md")]: {
      margin:"0  !important"
    }
    
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& label.Mui-focused": {
      color: "#722F37",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "blue",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "#722F37",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#722F37",
      },
      "&.Mui-selected fieldset": {
        borderColor: "#722F37",
      },
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkText: {
    color: "red",
    marginTop: "10px",
  },
}));
export default function SignUpComponent(props) {
  const classes = useStyles();

  const {data,apiProgress,handleSubmit,handleChange} =props 
  const {username,email,password} = data

 
  return (
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    {/* <Grid item xs={false} sm={4} md={7} component={Paper} >
      <div className={classes.rightSide}>
      <Typography component="h1" variant="h4">
          Welcome to booktter 
        </Typography>
      </div>
    </Grid> */}
    <Grid className={classes.root2} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register account 
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"

            autoFocus
            onChange={handleChange}
            value={username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            data={password}
          />
     
          <ButtonCustom
            onClick={handleSubmit}
            loading={apiProgress}
           
        
            fullWidth
            variant="contained"
            color="primary"
            styling={{
              color: "white",
              width: "100%",
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
              border: "0",
              paddingBottom: "10px",
            }}
            text="sign up"
          />
          {/* <Test handleSubmit={handleSubmit} loading={apiProgress} loginFaild={loginFaild}   success={loginCompleted}/> */}
          <Grid container>
            <Grid item className={classes.linkText}>
              <Link className={classes.linkText} to="signin" variant="body2">
                {"Already have an account"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Grid>
  </Grid>
  );
}
