import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import './geosuggest.css';

let types = [
  '(cities)'
  ];
  

class Search extends Component {
  constructor(props){
    super(props)
    this.setCities = props.setCities
  }

  onSuggestSelect(suggest) {
  if(suggest){
    this.addCity({name: suggest.gmaps.name, lat: suggest.location.lat, lng: suggest.location.lng, photo: suggest.gmaps.photos[0].getUrl()});
  }
  console.log(suggest)
  console.log(suggest.gmaps.photos[0].getUrl())
}

  render() {
    
  return (
     
        <Geosuggest 
        onSuggestSelect={this.onSuggestSelect}
        types={types}
        placeholder="Add City"
        queryDelay="500"
        addCity={this.props.addCity}
        />     
    
  )
  }
 
};

export default Search;