import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import ModalLayout from "./ModalLayout"
import ModalNav from "./Nav";
import { Grid, Paper } from "@material-ui/core";

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
     <Paper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ModalNav className={classes.nav}></ModalNav>
      </Grid>
      <Grid item xs={12}>
        <ModalLayout></ModalLayout>
      </Grid>
    </Grid>
    </Paper>
    </Modal>
  );
}
