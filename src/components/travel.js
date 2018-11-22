import React from 'react';
import PropTypes from 'prop-types';

function Travel (props) {
    const url = `https://www.google.com/maps/embed/v1/place?key=${props.google_api}&q=nottingham%2C%20nh`;
    return (
        <div className="callout">
            <h1>Travel</h1>
            <iframe
                title="googleMaps"
                frameborder="0" 
                style={{border:0, margin: '0', padding: '0', float: 'none', width: '100%', minHeight: '300px'}}
                src={url} allowfullscreen>
            </iframe>
        </div>
    );
  }
  
  Travel.propTypes = {
    google_api: PropTypes.string.isRequired
  };
  
  export default Travel;