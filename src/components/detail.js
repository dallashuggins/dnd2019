import React from 'react';
import PropTypes from 'prop-types';
import Weather from './weather.js';
import _ from 'underscore';

function Detail (props) {
    return (
        <div className="callout">
            <h1>Wedding details</h1>
            <br />
            <p>Time: 12pm</p>
            <p>Date: October 12th, 2019</p>
            <div>Temps:
                <Weather
                    temperatures={props.temperatures}
                />
            </div>
        </div>
    );
  }

  Detail.propTypes = {
    temperatures: PropTypes.array.isRequired
  };
  
  export default Detail;