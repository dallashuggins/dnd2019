import React from 'react';
import PropTypes from 'prop-types';

function Detail (props) {
    return (
        <div className="callout">
            <h1>Wedding details</h1>
            <br />
            <p>Time: Noon</p>
            <p>Date: October 12th, 2019</p>

        </div>
    );
  }
  
  Detail.propTypes = {
  };
  
  export default Detail;