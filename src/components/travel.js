import React from 'react';
import PropTypes from 'prop-types';

function Travel (props) {
    const url = `https://www.google.com/maps/embed/v1/place?key=${props.google_api}&q=nottingham%2C%20nh`;
    return (
        <div className="callout">
            <h1>Travel</h1>
            <h2>Local airports:</h2>
            <p>Boston Logan</p>
            <p>Manchester</p>
            <h2>Local buses:</h2>
            <p>CandJ</p>
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