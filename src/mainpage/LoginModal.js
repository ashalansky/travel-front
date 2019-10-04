import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import Login from "./Login"

const useStyles = makeStyles({
 modal: {
  margin: 'auto'
 }
})

export default function(props) {
  const classes = useStyles();
  return (
  <Modal className={classes.modal} open={props.open} onClose={props.closeModal}>
    <Login></Login>
  </Modal>
  );
}