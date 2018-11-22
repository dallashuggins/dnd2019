import React from 'react';
import PropTypes from 'prop-types';
import {
    Tabs,
    Tab
} from 'react-bootstrap';
import Form from './form.js';
import Detail from './detail.js';
import Travel from './travel.js';
import Social from './social.js';

function ContentTabs (props) {
    return (
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
        <Tab eventKey={1} title="Register" className="background">
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
        <Tab eventKey={2} title="Details" className="background">
            <Detail 
                temperatures={props.temperatures}
                accordion={props.accordion}
                changeBool={props.changeBool}
            />
        </Tab>
        <Tab eventKey={3} title="Travel" className="background">
            <Travel 
                google_api={props.google_api}
            />
        </Tab>
        <Tab eventKey={4} title="Social" className="background">
            <Social />
        </Tab>
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
    google_api: PropTypes.string.isRequired
};
  
export default ContentTabs;