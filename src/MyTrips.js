import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from 'react-router-dom'
import { Typography } from "@material-ui/core";
const cookies = new Cookies();

const useStyles = makeStyles({
  mainContainer: {
    display: 'grid',
    marginTop: "70px",
    gridTemplateRows: '20% auto',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(0deg, rgba(54,104,173,1) 0%, rgba(255,255,255,1) 0%, rgba(100,148,233,1) 100%)',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: '2rem',
    color: 'white',
    gridRow: 1,
    alignItems: 'center',
    textAlign: 'center',
    borderBottom: '1px solid white'
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'Ubuntu',
    fontSize: '1.5rem',
    color: 'white',
    
  },
  button: {
    textAlign: 'center',
    background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: '10px'
  }
});

export default function MyTrips() {
  // Setting initial state
  const initialState = {
    trips: [],
    loading: true,
  }

  const classes = useStyles();
  const id = cookies.get('userId');
  console.log("id", id)

  // Getter and setter for user state
  const [trips, setTrips] = useState(initialState)

  useEffect(() => {
    const getTrips = async () => {
      // Pass our param (:id) to the API call
      const { data } = await axios(process.env.REACT_APP_API_BASE_URL+"trips/"+id)

     setTrips(data)
         
    }

    // Invoke the async function
    getTrips()
  }, [])


   let tripList = [];
  if(!trips.loading && trips !== "Not Found"){
   
    tripList = trips.map(trip => {
      let linkUrl = `/itineraries/${trip.id}`; 
      return(
         <div className={classes.button}>
         <Button >
           
            <Link className={classes.link} to={linkUrl}> {trip.name}</Link>
            
          </Button>
          </div>
      )
      
    })

  }

  console.log("trips", trips)
  return trips.loading ? (
    <div>Loading...</div>
  ) : (
    <Container className={classes.mainContainer} maxWidth="md">
    <Typography className={classes.title}>My Trips</Typography>
    {tripList}
    <h1></h1>
    </Container>
  )





}