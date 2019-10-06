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
      let photo;
      if(suggest.gmaps.photos){
       photo = suggest.gmaps.photos[0].getUrl();
      }else{
        photo = "https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg";
      }
  
    this.addCity({name: suggest.gmaps.name, lat: suggest.location.lat, lng: suggest.location.lng, photo: photo});
  }
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