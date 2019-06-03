import React from 'react';

function Header () {
    return (
      <div className="header">
        <div className="headerItem">
          <a href="/rsvp">Register</a>
        </div>
        <div className="headerItem">
          <a href="/details">Details</a>
        </div>
        <div className="headerItem">
          <a href="/travel">Travel</a>
        </div>
        <div className="headerItem">
          <a href="/plans">Plans</a>
        </div>
      </div>
    )
}

export default Header;