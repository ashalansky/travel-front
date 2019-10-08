import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

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
  const id = cookies.get('id');
  // Getter and setter for user state
  const [trips, setTrips] = useState(initialState)

  useEffect(() => {
    const getTrips = async () => {
      // Pass our param (:id) to the API call
      const { data } = await axios(`http://localhost:8080/trips/1`)
      
      // Update state
     setTrips(data)
      
      console.log(data)
    }

    // Invoke the async function
    getTrips()
  }, [])


  return trips.loading ? (
    <div>Loading...</div>
  ) : (
    <Container className={classes.mainContainer} maxWidth="md">
    <h1>HEY</h1>
    <h1>HEY</h1>

    <h1>{trips}</h1>
    </Container>
  )





}