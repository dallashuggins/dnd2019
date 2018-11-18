import React from 'react';
import PropTypes from 'prop-types';

function Guests (props) {
    let {guests} = props;
    return (
      <div>
        <button className="guestButton" onClick={props.addGuest}>Add new guest +</button><br/>
            {
                guests.map((val, i)=> {
                let guestId = `guest-${i}`
                return (
                    <div className="guests" key={i}>
                    <input
                        type="text"
                        name={guestId}
                        data-id={i}
                        id={guestId}
                        onChange={props.handleGuests}
                        placeholder={`Guest #${i + 1}`}
                        className="name formFieldGuests"
                    />
                    <button className="removeButton" onClick={()=> {
                        props.removeGuest(guestId);
                    }}>X</button>
                    </div>
                )
                })
            }
      </div>
    )
}


Guests.propTypes = {
  addGuest: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired,
  guests: PropTypes.array.isRequired,
  handleGuests: PropTypes.func.isRequired,
};

export default Guests;