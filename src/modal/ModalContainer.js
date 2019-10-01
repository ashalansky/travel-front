import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import ModalLayout from "./ModalLayout"

const useStyles = makeStyles({
 modal: {
   width: "80%",
   height: "80%",
   padding: "5% 5% 10% 10%"
  

 }
})

export default function(props) {
  const classes = useStyles();
  return (
  <Modal className={classes.modal} open={props.open} onClose={props.closeModal}>
    <ModalLayout></ModalLayout>
    </Modal>
  );
}
