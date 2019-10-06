import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 325,
    height: 380,
    minWidth: 280,
    margin: '50px 0',
    fontFamily: 'Ubuntu'
  },
  media: {
    height: 290,
  },
 
});

export default function() {
  const classes = useStyles();

  return (
    <Card data-aos='fade-up'  
      data-aos-anchor-placement='top-bottom' 
      data-aos-easing='ease-in-out' 
      data-aos-duration='600'
      data-aos-delay='350'
      className={classes.card}
      >
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          image="https://handluggageonly.co.uk/wp-content/uploads/2018/02/Hand-Luggage-Only-8-5.jpg"
          title="Italy"
        >
          </CardMedia>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
           Florence (Prop)
          </Typography>
           Italy (Prop)
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
