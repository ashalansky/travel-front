import React from "react";
import NavBar from "./mainpage/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import { Grid, Paper, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
  mainContainer: {
    marginTop: "70px",
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
    marginTop: "70px",
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
  flight: {
    display: 'grid',
    gridTemplateColumns: '40% auto 40%',
    gridTemplateRows: '50% 50%',
    textAlign: "center",
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
    height: 90,
    fontFamily: 'Ubuntu',
    border: '1px solid #8d9ae8',
    borderRadius: 15,
    color: '#a5a0aa',
    '&:hover': {
      boxShadow: '-5px 0px 1px 0px rgba(155,139,247,1);'
    }
  },
  ticketButton: {
    // margin: theme.spacing(1),
    background: 'white',
    cursor: 'pointer',
    border: '2px solid #f29e92',
    color: '#a5a0aa',
    fontSize: 20,
    width: '50%',
    margin: 'auto',
    padding: '2px 8px',
    borderRadius: 15,
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'white',
      boxShadow: '0 2px 5px 2px rgba(255, 105, 135, .3)',
    }
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

  const test = function () {
    console.log(props);
  }

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
        <p><Paper className={classes.flight}>
              <Typography variant="body2" style={{ gridColumn: 1, fontSize: 20}}>
                YYC
              </Typography>
              <ArrowForwardIosIcon style={{ gridColumn: 2, justifySelf: 'center'}}></ArrowForwardIosIcon>
              <Typography variant="body2" style={{ gridColumn: 3, fontSize: 20}}>
                YEG
              </Typography>
              <Typography style={{ fontSize: 16}}>
                23 Oct, 16:30
              </Typography>
              <Typography style={{ fontSize: 18, color: '#9b8bf7', gridColumn: 3}}>
                $450
              </Typography>
            </Paper></p>
        <p><Paper className={classes.flight}>
              <Typography variant="body2" style={{ gridColumn: 1, fontSize: 20}}>
                YEG
              </Typography>
              <ArrowForwardIosIcon style={{ gridColumn: 2, justifySelf: 'center'}}></ArrowForwardIosIcon>
              <Typography variant="body2" style={{ gridColumn: 3, fontSize: 20}}>
                JFK
              </Typography>
              <Typography style={{ fontSize: 16}}>
                25 Oct, 16:30
              </Typography>
              <Typography style={{ fontSize: 18, color: '#9b8bf7', gridColumn: 3}}>
                $650
              </Typography>
            </Paper></p>
        <p>Flight Component Here</p>
        <p>Flight Component Here</p>
      </div>
      </div>
    )
  })

  return (
    <Container className={classes.mainContainer} maxWidth="md">
      <NavBar user={props.location.state.user}/>
      <Button className={classes.button}>
          <SaveAltIcon></SaveAltIcon>
           Save Trip
          </Button>
    {tripList}
    <Button onClick={()=>test()}> test </Button>
    </Container>
  );
}
