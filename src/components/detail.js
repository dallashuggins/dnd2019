import React from 'react';
import PropTypes from 'prop-types';
import Weather from './weather.js';
import Counter from './counter';
import _ from 'underscore';

function Detail (props) {
    const max = _.max(props.temperatures, function(temp) {return temp.maxTemp});
    const min = _.min(props.temperatures, function(temp) {return temp.minTemp});
    return (
        <div className="callout">
            <h1>Details</h1>
            <hr />
            <div className="detailText">
                <div className="detailTextIndiv">
                    <p className="key">Time (subject to change):</p><p className="val">2pm</p>
                </div>
                <div className="detailTextIndiv">
                    <p className="key">Date:</p><p className="val">October 12th, 2019</p>
                </div>
                <div className="detailTextIndiv">
                    <p className="key">Venue:</p><p className="val">The address is on the RSVP postcard that was sent to you.</p>
                </div>
                <div className="detailTextIndiv">
                    <p className="key">Dress:</p><p className="val">
                    Dressy casual. It will be cold at this time of year, so comfort first and foremost. 
                    We will make sure it's warm enough inside the tents at the wedding, but it's still 
                    a good idea to dress warm.
                    </p>
                </div>
                <div className="detailTextIndiv">
                    <p className="key">Weather:</p><p className="val">
                    The weather around this time of year is extremely variable. 
                    In 2017, there was a minimum temperature of {min.minTemp || 35} F 
                    and a maximum temperature of {max.maxTemp || 78} F during the week of
                    October 7th to October 17th. Typically be in the 40s or 50s. 
                    </p>
                </div>
                <div className="detailTextIndiv">
                    <p className="key">Gifts:</p><p className="val">
                    Gifts are in no way expected (!!), especially since most of our guests are traveling 
                    here from all over, and we know it's not cheap, so please save your money to travel and 
                    properly enjoy the beauty of New England in Fall! 
                    <br/><br/>
                    If you did want to give us a gift, 
                    we would be honored if you donated to a wonderful charity in our name, such as:
                    <br/>
                    - <a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org">The World Wildlife Fund (WWF)</a>
                    <br/>
                    - <a target="_blank" rel="noopener noreferrer" href="https://www.panthera.org/">Panthera</a>
                    <br/>
                    - <a target="_blank" rel="noopener noreferrer" href="https://www.doctorswithoutborders.org/">Doctor's Without Borders (MSF)</a>
                    <br/>
                    - <a target="_blank" rel="noopener noreferrer" href="https://www.splcenter.org/">Southern Poverty Law Center</a>
                    <br/>
                    - <a target="_blank" rel="noopener noreferrer" href="https://www.plannedparenthood.org/">Planned Parenthood</a>
                    <br/><br/>
                    We did also start a wedding registry on
                    <a target="_blank" rel="noopener noreferrer" style={{fontWeight: 'bold', fontStyle: 'italic'}} href="https://smile.amazon.com/wedding/drew-stevens-dallas-huggins-nottingham-october-2019/registry/2D6UCFPJ9L9N7"> Amazon.com</a>. 
                    With that being said, honestly what we really want is to have our loved ones out here 
                    to share this day with us, and to spend time with everyone while you're here. Having you here is 
                    the best gift we could ask for! 
                    </p>
                </div>
            </div>
            <hr/>
            <Counter />
            <div>
                <Weather
                    temperatures={props.temperatures}
                    changeBool={props.changeBool}
                    accordion={props.accordion}
                    google_api={props.google_api}
                />
            </div>
        </div>
    );
  }

  Detail.propTypes = {
    //temperatures: PropTypes.array.isRequired,
    accordion: PropTypes.bool.isRequired,
    changeBool: PropTypes.func.isRequired,
    google_api: PropTypes.string.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
    mins: PropTypes.number.isRequired,
    secs: PropTypes.number.isRequired,
    counter: PropTypes.func.isRequired
  };
  
  export default Detail;