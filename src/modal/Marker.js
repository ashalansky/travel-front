import React from 'react';
import './Marker.css';

const Marker = (props) => {
    const { color, text } = props;
    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={text}
      />
    );
  };

  export default Marker;