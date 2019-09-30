import React, { Component } from 'react';

import Geosuggest from 'react-geosuggest';
import './geosuggest.css';

let types = [
  '(cities)'
  ];
  

class Search extends Component {
  render() {
  return (
     
        <Geosuggest 
        onSuggestSelect={this.onSuggestSelect}
        types={types}
        placeholder="Find City"
        queryDelay="500"
        />     
    
  )
  }
  onSuggestSelect(suggest) {
    //console.log(suggest);
  if(suggest){
    console.log(suggest.gmaps.name);
    console.log(suggest.location);
  }
}
};

export default Search;