import React from "react";
import NavBar from "./mainpage/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: "80px",
  },
  cityContainer: {
    width: "100%",
    height: "40vh",
    position: "relative",
    minHeight: "125px"
  },
  img: {
    width: "100%",
    height: "100%"
  },
  title: {
    color: "white"
  },
  infoDiv: {
    position: "absolute",
    bottom: 0,
    left: "20px"
  },
  button: {
    position: "fixed",
    marginTop: "80px",
    marginRight: "10px",
    top: 0,
    right: 0,
    background: "#ffc250",
    border: "2px solid",
    borderColor: "#ffc250",
    width: 200,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Ubuntu",
    borderRadius: 7,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    zIndex: 10
  },
  
});

const sampleCitydata = [{
  id: 1,
  name: "Edmonton",
  code: "YEG",
  lat: 53.5461,
  lng: -113.4938,
  numOfTravelers: 2,
  stayDuration: 3
},
{
  id: 2,
  name: "Calgary",
  code: "YLW",
  lat: 51.0447,
  lng: -114.0719,
  numOfTravelers: 2,
  stayDuration: 5
}

];

export default function Itinerary(props) {
  const classes = useStyles();

  const tripList = sampleCitydata.map(city => {
    return(
      <div>
      <div className={classes.cityContainer}>
        <img
          className={classes.img}
          src={
            "https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sCmRaAAAApUwQwpKmenj4rRCahXNq_z-Ekj2IK-N4FGxi6pWCNPZrVcv1yES4mLezM2rKVDyUbfU-vEPCo7IkFskhZ5UVIVtqReQlExJWpDyRIhoW1F4D4AsvzI50_Fm61O9ZFXm_EhCq91nKN7FPRn1E-FCYltqTGhQlFQ8AFVm0li_yGinCa3kQEn55cg&3u4618&5m1&2e1&callback=none&key=AIzaSyAGNjTDZVWV_wC0uJuOcf7L5tYMyXytAZ8&token=130394"
          }
        />
        <div className={classes.infoDiv}>
          <h2 className={classes.title}>
            {city.name} | {city.code}
          </h2>
          <h3 className={classes.title}>
            <div>
            Passengers: {city.numOfTravelers}
            </div>
            <div>
              Stay Duration: {city.stayDuration}
            </div>          
          </h3>
        </div>
      </div>
      <div>
        <p>Flight Component Here</p>
        <p>Flight Component Here</p>
        <p>Flight Component Here</p>
        <p>Flight Component Here</p>
      </div>
      </div>
    
    )
    })

  
  return (
    <Container className={classes.mainContainer} maxWidth="md">
      <NavBar />
      <Button className={classes.button}>
          <SaveAltIcon></SaveAltIcon>
           Save Trip
          </Button>
    {tripList}
    </Container>
  );
}
