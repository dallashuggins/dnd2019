import React from 'react';
import PropTypes from 'prop-types';
/*import {
    Collapse
} from 'react-bootstrap';*/
//import _ from 'underscore';
//import moment from 'moment';

function Weather (props) {
    //const max = _.max(props.temperatures, function(temp) {return temp.maxTemp});
    //const min = _.min(props.temperatures, function(temp) {return temp.minTemp});
    return (
        <div>
            {/*<div className="weatherCallout">
                <button className="accordion" onClick={()=>{
                    props.changeBool('accordion')
                }}>View 2017 weather data</button>
                <Collapse in={props.accordion}>
                    <table>
                        <thead>
                            <tr key="header">
                                <th className="tableHeader">Date</th>
                                <th className="tableHeader">Max Temp</th> 
                                <th className="tableHeader">Min Temp</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            props.temperatures.map((temp, index) => {
                                return (
                                    <tr key={index}>
                                        <th className="body">{moment(temp.date, "MM/DD/YYYY").format("MMMM Do")}</th>
                                        <th className="body">{temp.maxTemp} F</th> 
                                        <th className="body">{temp.minTemp} F</th>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </Collapse>
            </div>
            <p>* Max temp Oct 7-17th: {max.maxTemp} F</p>
            <p>* Min temp Oct 7-17th: {min.minTemp} F</p>*/}
        </div>
    );
  }

  Weather.propTypes = {
    // temperatures: PropTypes.array.isRequired,
    // accordion: PropTypes.bool.isRequired,
    // changeBool: PropTypes.func.isRequired,
    // google_api: PropTypes.string.isRequired
  };
  
  export default Weather;