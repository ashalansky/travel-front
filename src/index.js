import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './mainpage/App';
// import Nav from 'modal/Nav';
import * as serviceWorker from './serviceWorker';
import axios from "axios";
import Itinerary from './Itinerary';
import { Route, BrowserRouter as Router } from 'react-router-dom'

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

const routing = (
  <Router>
    <Route exact path="/" component={App}/>
    <Route path="/itinerary" component={Itinerary}/>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
