import React from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';

function Footer (props) {
    return (
        <footer className="footer">
            <div className="footerLeft">
                <Counter />
            </div>
            <div className="footerRight">
                <p>Test</p>
            </div>
        </footer>
    );
  }
  
  Footer.propTypes = {
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
    mins: PropTypes.number.isRequired,
    secs: PropTypes.number.isRequired
  };
  
  export default Footer;