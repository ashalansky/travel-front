import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import SignUp from "./SignUp"

const useStyles = makeStyles({
 modal: {
  margin: 'auto'
 }
})

export default function(props) {
  const classes = useStyles();
  return (
  <Modal className={classes.modal} open={props.open} onClose={props.closeModal}>
    <SignUp register={props.register} close={props.closeModal} emailError={props.emailError} errorReset={props.errorReset}></SignUp>
    </Modal>
  );
}