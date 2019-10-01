import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import ModalLayout from "./ModalLayout"


const useStyles = makeStyles({
 modal: {
   width: "80%",
   height: "80%"
 }
})

export default function(props) {
  const classes = useStyles();
  return <Modal className={classes.modal} open={props.open}><ModalLayout></ModalLayout></Modal>;
}
