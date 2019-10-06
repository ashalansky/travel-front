import React, { Fragment } from "react";
import DestinationCard from "./DestinationCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    padding: 30,
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    whiteSpace: 'nowrap',
    marginBottom: 30
  }
});


const destinationList = [{name: "Florence", photo: "https://handluggageonly.co.uk/wp-content/uploads/2018/02/Hand-Luggage-Only-8-5.jpg"
}, {name: "Paris", photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/07/08/paris.jpg?w968h681"}, {name: "Cancun", photo: "https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/42c9d71d-0a9d-c6a3-bf2d-e485fa153bb8/630x355.jpg"}]





export default function(props) {
  const classes = useStyles();
  const destinationComponents = destinationList.map(city => {
   
   return <DestinationCard setModal={props.setModal} modalOn={props.modalOn} name={city.name} photo={city.photo}></DestinationCard>

  })
  

  return (
  <Fragment>
    <Typography 
      className={classes.title}
      variant="h3"
      data-aos='fade-up' 
      data-aos-delay='150' 
      data-aos-anchor-placement='top-bottom' 
      data-aos-easing='ease-in-out' 
      data-aos-duration='600'
     > 
       Popular Destinations
    </Typography>
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
    >
  {destinationComponents}
    </Grid>
    </Fragment>
  )

}