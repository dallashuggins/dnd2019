import React from 'react';
import PropTypes from 'prop-types';
import Rsvp from './rsvp.js';

function Form (props) {
    return (
        <div className="form">
            {props.page === 0 ? (
                <Rsvp
                    name={props.name}
                    regCode={props.regCode}
                    status={props.status}
                    onInputChange={props.onInputChange}
                    addRegistrant={props.addRegistrant}
                    updateState={props.updateState}
                />
            ) : props.page === 1 ? (
                <div>
                    <p>Thank you for registering, {props.name}</p>
                    <br />
                    <button className="button" onClick={()=> {
                        props.updateState({page: 0, name: '', status: ''});
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
    onInputChange: PropTypes.func.isRequired,
    addRegistrant:PropTypes.func.isRequired,
    updateState: PropTypes.func.isRequired
  };
  
  export default Form;