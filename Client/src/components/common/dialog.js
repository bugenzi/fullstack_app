import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {ButtonCustom} from './index'


const styles = (theme) => ({
  root: {
    backgroundColor: "transparent !improtant"
    ,height:"300vh"
  },

  paper: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    overflow: "hidden"
  },
  // closeButton: {
  //   position: 'absolute',
  //   right: theme.spacing(1),
  //   top: theme.spacing(1),
  //   backgroundColor:"white"
  //   },
});



const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: 'transparent',
    color: "white",
    minWidth:525,
    [theme.breakpoints.down("md")]: {
      minWidth:220,
    },
  },
}))(MuiDialogContent);



export default function CustomizedDialogs(props) {
  const classes=styles()
  const {open,handleModal}=props;


  return (
    <div>

      <Dialog 
        BackdropProps={{
          classes: {
            root: classes.root
          }
        }}
        PaperProps={{
          classes: {
            root: classes.paper
          }
        }}
        onClose={handleModal} aria-labelledby="customized-dialog-title" open={open}>
        <DialogContent  dividers >
            {props.children}
        </DialogContent>
        {/* <DialogActions>

        <ButtonCustom    variant="outlined"
          onClick={handleModal}
                  styling={{
          backgroundColor: "white",
          fontSize: 15,
          borderRadius: "10x",
          padding: "10px",
          
       }}
       text="Send "
       />
        </DialogActions> */}

        {/* Think about ideas on handling input post   */}
      </Dialog>
    </div>
  );
}