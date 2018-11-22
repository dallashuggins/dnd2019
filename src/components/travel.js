import React from 'react';
import {
    Collapse
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function Travel (props) {
    const url = `https://www.google.com/maps/embed/v1/place?key=${props.google_api}&q=nottingham%2C%20nh`;
    return (
        <div className="callout">
            <h1>Travel</h1>
            <button className="travelAccordion accordionAir" onClick={()=>{
                props.changeBool('accordionAir')
            }}>Air</button>
            <Collapse in={props.accordionAir}>
                <div className="air">
                    <p className="air">Airlines: Boston Logan (BOS) and Manchester-Boston Regional Airport (MHT)</p>
                    <p className="air"></p>
                </div>
            </Collapse>
            <button className="travelAccordion accordionBus" onClick={()=>{
                props.changeBool('accordionBus')
            }}>Public transportation</button>
            <Collapse in={props.accordionBus}>
                <div className="bus">
                    <p className="bus">Public transportation: C&J</p>
                </div>
            </Collapse>
            <button className="travelAccordion accordionCar" onClick={()=>{
                props.changeBool('accordionCar')
            }}>Driving</button>
            <Collapse in={props.accordionCar}>
                <div className="car">
                    <p className="car">Rental cars: Enterprise</p>
                </div>
            </Collapse>
            <br/>
            <iframe
                title="googleMaps"
                frameBorder="0" 
                style={{border:0, margin: '0', padding: '0', float: 'none', width: '100%', minHeight: '300px'}}
                src={url} allowFullScreen>
            </iframe>
        </div>
    );
  }
  
  Travel.propTypes = {
    google_api: PropTypes.string.isRequired,
    changeBool: PropTypes.func.isRequired,
    accordionAir: PropTypes.bool.isRequired,
    accordionBus: PropTypes.bool.isRequired,
    accordionCar: PropTypes.bool.isRequired
  };
  
  export default Travel;