import React from 'react';
import PropTypes from 'prop-types';

function Detail (props) {
    let dates = [
        '2017/10/05'/*,
        '2017/10/06',
        '2017/10/07',
        '2017/10/08',
        '2017/10/09',
        '2017/10/10',
        '2017/10/11',
        '2017/10/12',
        '2017/10/13',
        '2017/10/14',
        '2017/10/15',
        '2017/10/16',
        '2017/10/17',
        '2017/10/18',
        '2017/10/19'*/
    ];
    return (
        <div className="callout">
            <h1>Wedding details</h1>
            <br />
            <p>Time: 12pm</p>
            <p>Date: October 12th, 2019</p>
            {
                dates.map((val, i) => {
                    let weatherObserv = props.getWeatherObserv(val);
                    return (
                        <div key={i}>
                            <p key={i}>Temperatures: {weatherObserv.temperature}</p>
                        </div>
                    );
                })
            }
        </div>
    );
  }
  
  Detail.propTypes = {
    getWeatherObserv: PropTypes.func.isRequired
  };
  
  export default Detail;