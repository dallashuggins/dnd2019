import React from 'react';
import PropTypes from 'prop-types';
import Weather from './weather.js';

function Detail (props) {
    return (
        <div className="callout">
            <h1>Details</h1>
            <br />
            <div className="detailText">
                <div className="detailTextIndiv">
                    <p className="key">Time:</p><p className="val">12pm</p>
                </div>
                <br/>
                <div className="detailTextIndiv">
                    <p className="key">Date:</p><p className="val">October 12th, 2019</p>
                </div>
            </div>
            <br/>
            <div className="counter" onMouseEnter={props.counter} onSelect={props.counter} onClick={props.counter}>
                <h2 className="counter">Countdown</h2>
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
                <p className="hover">* Hover mouse or click to update time</p>
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
    updateState: PropTypes.func.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
    mins: PropTypes.number.isRequired,
    secs: PropTypes.number.isRequired,
    counter: PropTypes.func.isRequired
  };
  
  export default Detail;