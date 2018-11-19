import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

function Detail (props) {
    return (
        <div className="callout">
            <h1>Wedding details</h1>
            <br />
            <p>Time: 12pm</p>
            <p>Date: October 12th, 2019</p>
            <div>Temps:
            {
                props.dates.map((val, i) => {
                    return props.getWeatherObserv(val).then(weather => {
                        return weather.temperatures.map((temp, index) => {
                            return (
                                <p key={index}>{temp}</p>
                            )
                        });
                    });
                })
            }
            </div>
        </div>
    );
  }

  Detail.propTypes = {
    getWeatherObserv: PropTypes.func.isRequired,
    dates: PropTypes.array.isRequired
  };
  
  export default Detail;