import React from 'react';
import PropTypes from 'prop-types';
import Weather from './weather.js';
import _ from 'underscore';
import countdown from 'countdown';

function Detail (props) {
    const fullCount = countdown( new Date(2019, 10, 12) ).toString();
    const daysCount = countdown(new Date(2019, 10, 12), null, countdown.DAYS).toString();
    const count = countdown(new Date(2019, 10, 12)).toString();
    const splitCount = count.split(",");
    var years, months, days, hours, mins, secs;
    const dates = (array) => {
        for (let i; i < array.length; i++) {
            if (_.contains('years')) {

            }
        } 
    }
    return (
        <div className="callout">
            <h1>Wedding details</h1>
            <br />
            <div className="counter">
                {fullCount}
            </div>
            <p>Time: 12pm</p>
            <p>Date: October 12th, 2019</p>
            <p></p>
            <div>
                <Weather
                    temperatures={props.temperatures}
                    changeBool={props.changeBool}
                    accordion={props.accordion}
                />
            </div>
        </div>
    );
  }

  Detail.propTypes = {
    temperatures: PropTypes.array.isRequired,
    accordion: PropTypes.bool.isRequired,
    changeBool: PropTypes.func.isRequired
  };
  
  export default Detail;