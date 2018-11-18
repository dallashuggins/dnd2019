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
                    onInputChange={props.onInputChange.bind(this)}
                    addRegistrant={props.addRegistrant.bind(this)}
                    updateState={props.updateState.bind(this)}
                    getWeatherObserv={props.getWeatherObserv.bind(this)}
                />
            </div>
        </Tab>
        <Tab eventKey={2} title="Details" className="background">
            <Detail />
        </Tab>
        <Tab eventKey={3} title="Travel" className="background">
            <Travel />
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
    onInputChange: PropTypes.func.isRequired,
    addRegistrant:PropTypes.func.isRequired,
    updateState: PropTypes.func.isRequired,
    getWeatherObserv: PropTypes.func.isRequired
};
  
export default ContentTabs;