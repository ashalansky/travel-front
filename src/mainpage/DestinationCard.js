import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AOS from 'aos'

const useStyles = makeStyles({
  card: {
    maxWidth: 325,
    height: 380,
    minWidth: 280,
  },
  media: {
    height: 290
  },
 
});

export default function(props) {
  const classes = useStyles();

  return (
    <Card data-aos='fade-up'  
      data-aos-anchor-placement='top-bottom' 
      data-aos-easing='ease-in-out' 
      data-aos-duration='600'
      data-aos-delay='350'
      className={classes.card}
      >
      <CardActionArea className={classes.actionArea} onClick={() => props.setModal(!props.modalOn)}>
        <CardMedia
          className={classes.media}
          image={props.photo}
          title="Italy"
        >
          </CardMedia>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
           {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
