import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from 'react-router-dom'
const cookies = new Cookies();

const useStyles = makeStyles({
  mainContainer: {
    marginTop: "80px",
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
         <div>
         <Button>
           
            <Link to={linkUrl}> {trip.name}    {trip.id} </Link>
            
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
    <h1>My Trips</h1>
    {tripList}
    <h1></h1>
    </Container>
  )





}