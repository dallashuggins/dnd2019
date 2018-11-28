import React from 'react';
import PropTypes from 'prop-types';

function Footer (props) {
    return (
        <footer className="footer">
            <div className="footerLeft">
                <div className="counterFooter" onMouseEnter={props.counter} onSelect={props.counter} onClick={props.counter}>
                    <div className="monthsFooter">
                        {props.months}
                        <p className="text">Months</p>
                    </div>
                    <div className="daysFooter">
                        {props.days}
                        <p className="text">Days</p>
                    </div>
                    <div className="otherFooter">
                        {props.hours}:
                        {props.mins}:
                        {props.secs}
                    </div>
                </div>
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