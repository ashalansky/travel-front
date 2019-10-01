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
    this.addCity({name: suggest.gmaps.name, lat: suggest.location.lat, lng: suggest.location.lng});
//    console.log(suggest.location);
  }
}

  render() {
<<<<<<< HEAD
    return (
      
          <Geosuggest 
          onSuggestSelect={this.onSuggestSelect}
          types={types}
          placeholder="Add City"
          queryDelay="500"
          />     
      
    )
=======
    
  return (
     
        <Geosuggest 
        onSuggestSelect={this.onSuggestSelect}
        types={types}
        placeholder="Find City"
        queryDelay="500"
        addCity={this.props.addCity}
        />     
    
  )
>>>>>>> master
  }
 
};

export default Search;