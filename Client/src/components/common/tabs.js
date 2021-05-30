import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {

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
      position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {

    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));
function TabsWrapper(props) {
  const { value, onChange } = props;
  const classes = useStyles();
  
  return (
   
      <>
        <Tabs style={{backgroundColor:"white"}}  textColor='secondary' className={classes.root} indicatorColor='secondary' value={value} onChange={onChange}>
          {props.children}

        </Tabs>
      </>
  
  
)
  }

export default TabsWrapper