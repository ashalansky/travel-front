import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Itinerary({match}) {
  // Setting initial state
  const initialState = {
    itinerary: {},
    loading: true,
  }

  // Getter and setter for user state
  const [itinerary, setItinerary] = useState(initialState)

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    const getItinerary = async () => {
      // Pass our param (:id) to the API call
      const { data } = await axios(`http://localhost:8080/itineraries/${match.params.id}`)
     console.log(match.params.id)
      // Update state
      setItinerary(data)
    }

    // Invoke the async function
    getItinerary()
  }, []) // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

  // Return a table with some data from the API.
  return itinerary.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <h1>{match.params.id}</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Website</th>
            <th>Followers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{itinerary.name}</td>
            <td></td>
            <td>
              
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}