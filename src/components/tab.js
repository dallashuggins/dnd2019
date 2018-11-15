import React from 'react';
import PropTypes from 'prop-types';
import {
    Tabs,
    Tab
} from 'react-bootstrap';
import Form from './form.js';
import Detail from './detail.js';
import Travel from './travel.js';
import background from '../color.jpg';

function ContentTabs (props) {
    const backgroundImage = {
        backgroundImage: `url(${background})`
    };
    return (
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
        <Tab eventKey={1} title="Register" className="background">
            <div className="tabContent">
                <Form
                    page={props.page}
                    name={props.name}
                    regCode={props.regCode}
                    status={props.status}
                    onInputChange={props.onInputChange.bind(this)}
                    addRegistrant={props.addRegistrant.bind(this)}
                    updateState={props.updateState.bind(this)}
                />
            </div>
        </Tab>
        <Tab eventKey={2} title="Wedding Details" className="background" style={backgroundImage}>
            <Detail/>
        </Tab>
        <Tab eventKey={3} title="Travel" className="background" style={backgroundImage}>
            <Travel/>
        </Tab>
        </Tabs>
    );
}
  
ContentTabs.propTypes = {
    page: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    regCode: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    addRegistrant:PropTypes.func.isRequired,
    updateState: PropTypes.func.isRequired
};
  
export default ContentTabs;