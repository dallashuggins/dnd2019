import React from 'react';
import {
    Collapse
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function Plans (props) {
    return (
        <div className="callout">
            <h1>What To Do</h1>
            <br />
            <div className="detailText">
                <div className="detailTextIndiv">
                    <p className="val"></p>
                </div>
            </div>
            <button className="planAccordion accordionCity" onClick={()=>{
                props.changeBool('accordionCity')
            }}>City</button>
            <Collapse in={props.accordionCity}>
                <div className="city">
                    <h2 className="city">Boston</h2>
                    <ul className="city">
                        <li>Boston Public Gardens</li>
                    </ul>
                    <h2 className="city">Portland</h2>
                    <ul className="city">
                        <li>Portland Head Light</li>
                    </ul>
                </div>
            </Collapse>
        </div>
    );
  }
  
  Plans.propTypes = {
    accordionCity: PropTypes.bool.isRequired,
    changeBool: PropTypes.func.isRequired
  };
  
  export default Plans;