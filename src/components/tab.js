import React from 'react';
import PropTypes from 'prop-types';
import {
    Tabs,
    Tab
} from 'react-bootstrap';
import Form from './form.js';
import Detail from './detail.js';
import Travel from './travel.js';
import Plans from './whatdoto.js';
//import Social from './social.js';

function ContentTabs (props) {
    return (
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
        <Tab eventKey={1} title="Register">
            <div className="tabContent">
                <Form
                    page={props.page}
                    name={props.name}
                    regCode={props.regCode}
                    status={props.status}
                    comments={props.comments}
                    guests={props.guests}
                    onInputChange={props.onInputChange}
                    addRegistrant={props.addRegistrant}
                    updateState={props.updateState}
                    addGuest={props.addGuest}
                    handleGuests={props.handleGuests}
                    removeGuest={props.removeGuest}
                />
            </div>
        </Tab>
        <Tab eventKey={2} title="Details">
            <Detail 
                temperatures={props.temperatures}
                accordion={props.accordion}
                changeBool={props.changeBool}
                google_api={props.google_api}
                months={props.months}
                days={props.days}
                hours={props.hours}
                mins={props.mins}
                secs={props.secs}
            />
        </Tab>
        <Tab eventKey={3} title="Travel">
            <Travel 
                google_api={props.google_api}
            />
        </Tab>
        <Tab eventKey={4} title="What to do">
            <Plans />
        </Tab>
        {/*<Tab eventKey={5} title="Social">
            <Social />
        </Tab>*/}
        </Tabs>
    );
}
  
ContentTabs.propTypes = {
    page: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    regCode: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    guests: PropTypes.array.isRequired,
    onInputChange: PropTypes.func.isRequired,
    addRegistrant:PropTypes.func.isRequired,
    updateState: PropTypes.func.isRequired,
    changeBool: PropTypes.func.isRequired,
    addGuest: PropTypes.func.isRequired,
    handleGuests: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired,
    temperatures: PropTypes.array.isRequired,
    accordion: PropTypes.bool.isRequired,
    google_api: PropTypes.string.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
    mins: PropTypes.number.isRequired,
    secs: PropTypes.number.isRequired
};
  
export default ContentTabs;