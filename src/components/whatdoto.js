import React from 'react';
import {
    Collapse
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import FallCarousel from './carousel';

function Plans (props) {
    return (
        <div className="callout">
            <h1>What To Do</h1>
            <hr/>
            <div className="detailText">
                <div className="detailTextIndiv">
                    <p className="val">
                    Nottingham is located in the Seacoast area of New Hampshire.
                    We are between one and one and a half hours away from Boston, 
                    around an hour from Portland (Maine), a couple hours from the 
                    White Mountains, around 3 hours from Burlington, Vermont, 
                    and about 5 hours from both Toronto and NYC. Below I have added some 
                    Fall photos as ideas of what to do locally, though I (Dallas) would 
                    absolutely love to help plan anyone who wants tips on the best places.
                    </p>
                </div>
            </div>
            {/*<button className="planAccordion accordionCity" onClick={()=>{
                props.changeBool('accordionCity')
            }}>Fun in the City</button>
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
            <button className="planAccordion accordionFall" onClick={()=>{
                props.changeBool('accordionFall')
            }}>Autumn time exploring</button>
            <Collapse in={props.accordionFall}>
                <div className="fall">
                    <h2 className="fall">Hiking</h2>
                    <ul className="fall">
                        <li>Anywhere in the White Mountains</li>
                    </ul>
                    <h2 className="fall">Scenic drives</h2>
                    <ul className="fall">
                        <li>Kancamagus Highway</li>
                    </ul>
                </div>
            </Collapse>
            <button className="planAccordion accordionHalloween" onClick={()=>{
                props.changeBool('accordionHalloween')
            }}>HalloweEeEeEeeEeEeEen</button>
            <Collapse in={props.accordionHalloween}>
                <div className="halloween">
                    <h2 className="halloween">Haunted Houses</h2>
                    <ul className="halloween">
                        <li>Haunted Overland</li>
                    </ul>
                    <h2 className="halloween">Corn mazes</h2>
                    <ul className="halloween">
                        <li>Emery Farms</li>
                    </ul>
                </div>
            </Collapse>*/}
            <hr />
            <FallCarousel 
            />
        </div>
    );
  }
  
  Plans.propTypes = {
    accordionCity: PropTypes.bool.isRequired,
    accordionFall: PropTypes.bool.isRequired,
    accordionHalloween: PropTypes.bool.isRequired,
    changeBool: PropTypes.func.isRequired
  };
  
  export default Plans;