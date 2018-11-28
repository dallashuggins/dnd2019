import React from 'react';
import PropTypes from 'prop-types';
import Weather from './weather.js';
import _ from 'underscore';

function Detail (props) {
    const max = _.max(props.temperatures, function(temp) {return temp.maxTemp});
    const min = _.min(props.temperatures, function(temp) {return temp.minTemp});
    console.log("Max & min:", max, min)
    return (
        <div className="callout">
            <h1>Details</h1>
            <hr />
            <div className="detailText">
                <div className="detailTextIndiv">
                    <p className="key">Time (subject to change):</p><p className="val">12pm</p>
                </div>
                <div className="detailTextIndiv">
                    <p className="key">Date:</p><p className="val">October 12th, 2019</p>
                </div>
                <div className="detailTextIndiv">
                    <p className="key">Dress:</p><p className="val">
                    Dressy casual. It will be cold at this time of year, so comfort first and foremost. 
                    If you're feeling real daring, feel free to wear a costume!
                    </p>
                </div>
                <div className="detailTextIndiv">
                    <p className="key">Weather:</p><p className="val">
                    The weather around this time of year is extremely variable. 
                    In 2017, there was a minimum temperature of {min.minTemp || 35} F 
                    and a maximum temperature of {max.maxTemp || 78} F during the week of
                    October 7th to October 17th. Typically be in the 40s or 50s.
                    </p>
                </div>
            </div>
            <hr/>
            <div className="counter" onMouseEnter={props.counter} onSelect={props.counter} onClick={props.counter}>
                <h3 className="counter">Countdown</h3>
                <div className="months">
                    {props.months}
                    <p className="text">Months</p>
                </div>
                <div className="days">
                    {props.days}
                    <p className="text">Days</p>
                </div>
                <div className="hours">
                    {props.hours}
                    <p className="text">Hours</p>
                </div>
                <div className="mins">
                    {props.mins}
                    <p className="text">Minutes</p>
                </div>
                <div className="secs">
                    {props.secs}
                    <p className="text">Seconds</p>
                </div>
            </div>
            <div>
                <Weather
                    temperatures={props.temperatures}
                    changeBool={props.changeBool}
                    accordion={props.accordion}
                    google_api={props.google_api}
                />
            </div>
        </div>
    );
  }

  Detail.propTypes = {
    temperatures: PropTypes.array.isRequired,
    accordion: PropTypes.bool.isRequired,
    changeBool: PropTypes.func.isRequired,
    google_api: PropTypes.string.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
    mins: PropTypes.number.isRequired,
    secs: PropTypes.number.isRequired,
    counter: PropTypes.func.isRequired
  };
  
  export default Detail;