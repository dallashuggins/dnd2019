import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

function Weather (props) {
    //let {temperatures} = props;
    //console.log(temperatures)
    return (
        <div>
            {
                /*temperatures.map((val, i)=> {
                    return (
                        <p key={i}>{val}</p>
                    )
                })*/
            }
        </div>
    );
  }

  Weather.propTypes = {
    //temperatures: PropTypes.array
  };
  
  export default Weather;