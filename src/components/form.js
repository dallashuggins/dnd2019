import React from 'react';
import PropTypes from 'prop-types';
import Rsvp from './rsvp.js';

function Form (props) {
    return (
        <div className="callout">
            <h1>RSVP</h1>
            <hr />
            {props.page === 0 ? (
                <Rsvp
                    name={props.name}
                    regCode={props.regCode}
                    status={props.status}
                    comments={props.comments}
                    guests={props.guests}
                    onInputChange={props.onInputChange}
                    addRegistrant={props.addRegistrant}
                    addGuest={props.addGuest}
                    handleGuests={props.handleGuests}
                    removeGuest={props.removeGuest}
                />
            ) : props.page === 1 ? (
                <div>
                    <p>Thank you for registering, {props.name}!</p>
                    <br />
                    <button className="buttonForm butterAnother" 
                    onClick={()=> {
                        props.updateState({page: 0, name: '', status: '', comments: '', guests: []});
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
    guests: PropTypes.array.isRequired,
    onInputChange: PropTypes.func.isRequired,
    addRegistrant:PropTypes.func.isRequired,
    updateState: PropTypes.func.isRequired,
    addGuest: PropTypes.func.isRequired,
    handleGuests: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired
  };
  
  export default Form;