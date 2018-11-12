import React from 'react';
import PropTypes from 'prop-types';

function Form (props) {
    return (
        <div className="form">
            <p>Full Name:</p>
            <input type="text" name="name" className="formField" onChange={props.onInputChange} />
            <br />
            <p>Registration Code:</p>
            <input type="text" name="regCode" className="formField" onChange={props.onInputChange} />
            <br />
            <button className="button" onClick={()=> {
                props.addRegistrant(props.name, props.regCode);
                props.clearState();
            }}>RSVP</button>
        </div>
    );
  }
  
  Form.propTypes = {
    name: PropTypes.string.isRequired,
    regCode: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    addRegistrant:PropTypes.func.isRequired,
    clearState: PropTypes.func.isRequired
  };
  
  export default Form;