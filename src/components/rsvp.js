import React from 'react';
import PropTypes from 'prop-types';
import Guests from './guests.js';

function Rsvp (props) {
    return (
        <div className="formRsvp">
            <div className="alert">
                <span className="alertTitle">Note:</span>
                <span className="alertDescription">Registration deadline is June 1st</span>
            </div>
            <div className="attendDrop">
                <select required className="formField" name="status" defaultValue="first" onChange={props.onInputChange}>
                    <option value="first" disabled>Can you attend our wedding?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <br />
            <input required
                type="text" 
                name="name" 
                placeholder="Name" 
                className="formField"
                onChange={props.onInputChange}
            />
            <br /><br />
            <input required
                type="text" 
                name="email" 
                placeholder="Email (for notifications)" 
                className="formField"
                onChange={props.onInputChange}
            />
            <br /><br />
            <input required
                type="text" 
                name="regCode"
                placeholder="Registration Code" 
                className="formField"
                value={props.regCode === '' ? '' : props.regCode}
                onChange={props.onInputChange}
            />
            <br /><br />
            <Guests 
                addGuest={props.addGuest}
                handleGuests={props.handleGuests}
                removeGuest={props.removeGuest}
                guests={props.guests}
            />
            <br />
            <textarea 
                className="formField"
                name="comments"
                placeholder="Comments"
                onChange={props.onInputChange} 
            />
            <br />
            <button className="buttonForm" onClick={()=> {
                props.addRegistrant(props.name, props.regCode, props.status, props.comments, props.guests, props.email);
            }}>RSVP</button>
        </div>
    );
  }
  
  Rsvp.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    regCode: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    guests: PropTypes.array.isRequired,
    onInputChange: PropTypes.func.isRequired,
    addRegistrant:PropTypes.func.isRequired,
    addGuest: PropTypes.func.isRequired,
    handleGuests: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired,
  };
  
  export default Rsvp;