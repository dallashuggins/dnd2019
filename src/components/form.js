import React from 'react';
import PropTypes from 'prop-types';
import Rsvp from './rsvp.js';

function Form (props) {
    return (
        <div className="callout">
            {props.page === 0 ? (
                <Rsvp
                    name={props.name}
                    regCode={props.regCode}
                    status={props.status}
                    comments={props.comments}
                    onInputChange={props.onInputChange}
                    addRegistrant={props.addRegistrant}
                    updateState={props.updateState}
                    getWeatherObserv={props.getWeatherObserv}
                />
            ) : props.page === 1 ? (
                <div>
                    <p>Thank you for registering, {props.name}!</p>
                    <br />
                    <button className="buttonForm butterAnother" onClick={()=> {
                        props.updateState({page: 0, name: '', status: '', comments: ''});
                    }}>Register another person</button>
                </div>
            ) : ''}
        </div>
    );
  }
  
  Form.propTypes = {
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
  
  export default Form;