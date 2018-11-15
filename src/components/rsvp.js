import React from 'react';
import PropTypes from 'prop-types';

function Rsvp (props) {
    return (
        <div>
            <input type="text" 
            name="name" 
            placeholder="Name" 
            className="formField"
            required 
            onChange={props.onInputChange} />
            <br /><br />
            <input type="text" 
            name="regCode"
            placeholder="Registration Code" 
            className="formField"
            value={props.regCode === '' ? '' : props.regCode}
            required 
            onChange={props.onInputChange} />
            <br />
            <button className="buttonForm" onClick={()=> {
                props.addRegistrant(props.name, props.regCode, props.status);
            }}>RSVP</button>
        </div>
    );
  }
  
  Rsvp.propTypes = {
    name: PropTypes.string.isRequired,
    regCode: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    addRegistrant:PropTypes.func.isRequired,
    updateState: PropTypes.func.isRequired
  };
  
  export default Rsvp;