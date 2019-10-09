import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from "./mainpage/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import { Grid, Paper, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles({
  mainContainer: {
    marginTop: "90px",
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


export default function Itinerary({match}) {
  // Setting initial state
  const initialState = {
    itinerary: {},
    loading: true,
  }
  // Setting Styles
  const classes = useStyles();

  // Getter and setter for user state
  const [itinerary, setItinerary] = useState(initialState)

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getItinerary = async () => {
      // Pass our param (:id) to the API call
    
      const { data } = await axios(process.env.REACT_APP_API_BASE_URL+match.params.id)
     console.log(match.params.id)
      // Update state
      setItinerary(data)
      
      console.log(data)
    }

    // Invoke the async function
    getItinerary()
  }, []) // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop
  console.log(itinerary)
  let tripList = "";

  if(itinerary.cities){
    tripList = itinerary.cities.map(city => {
      let flightComp = ()=> {};
      if(city.flight){
        console.log(city.flight)
         flightComp = function(){
          return (
            <div>
            <p><Paper className={classes.flight}>
            <Typography variant="body2" style={{ gridColumn: 1, fontSize: 20}}>
              {city.flight.departure_location}
            </Typography>
            <ArrowForwardIosIcon style={{ gridColumn: 2, justifySelf: 'center'}}></ArrowForwardIosIcon>
            <Typography variant="body2" style={{ gridColumn: 3, fontSize: 20}}>
            {city.flight.arrival_location}
            </Typography>
            <Typography style={{ fontSize: 16}}>
              {city.departure_date}
            </Typography>
            <Typography style={{ fontSize: 18, color: '#9b8bf7', gridColumn: 3}}>
              ${city.flight.price}
            </Typography>
          </Paper></p>
              </div>  
          )

        

        }
      }



      
      
      
      return(
        <div>
      <div className={classes.cityContainer}>
        <img
          className={classes.img}
          src={ city.img? city.img : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1.png "
            
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
              
          </h3>
        </div>
      </div>
          {flightComp()}
      </div>
      )

        })

  }


  // Return a table with some data from the API.
  return itinerary.loading ? (
    <div>Loading...</div>
  ) : (
    <Container className={classes.mainContainer} maxWidth="md">
     <h1>{itinerary.name}</h1>
     {tripList}
    </Container>
  )
}