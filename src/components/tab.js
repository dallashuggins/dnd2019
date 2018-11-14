import React from 'react';
import PropTypes from 'prop-types';
import {
    Tabs,
    Tab
} from 'react-bootstrap';
import Form from './form.js';
import background from '../color.jpg';

function ContentTabs (props) {
    const backgroundImage = {
        backgroundImage: `url(${background})`
    };
    return (
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
        <Tab eventKey={1} title="Register" className="background" style={backgroundImage}>
            <div className="tabContent">
                <Form
                    name={props.name}
                    regCode={props.regCode}
                    status={props.status}
                    onInputChange={props.onInputChange.bind(this)}
                    addRegistrant={props.addRegistrant.bind(this)}
                    clearState={props.clearState.bind(this)}
                />
            </div>
        </Tab>
        <Tab eventKey={2} title="Wedding Details" className="background" style={backgroundImage}>
            <div className="tabContent">
                Wedding Details info
            </div>
        </Tab>
        <Tab eventKey={3} title="Travel" className="background" style={backgroundImage}>
            <div className="tabContent">
                Travel info
            </div>
        </Tab>
        </Tabs>
    );
}
  
ContentTabs.propTypes = {
    name: PropTypes.string.isRequired,
    regCode: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    addRegistrant:PropTypes.func.isRequired,
    clearState: PropTypes.func.isRequired
};
  
export default ContentTabs;