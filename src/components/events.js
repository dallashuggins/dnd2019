import React from 'react';
import {
    Collapse
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import _ from 'underscore';

function Events (props) {
    return (
        <div className="callout">
            <h1>Events</h1>
            <hr />
            <div className="detailText">
                <div className="detailTextIndiv">
                    <p className="val">
                      Below we have detailed information on our plans for the days leading up to/following 
                      the wedding. Some plans could change depending on who was planning on joining, but for the 
                      most part we're trying to organize these events so that we can spend time with everyone 
                      outside of the day of the wedding, and also because we wanted to introduce you to some 
                      different Fall activities. We can't wait to see you soon!
                    </p>
                </div>
            </div>
            <hr/>
            <button className="eventAccordion accordionThurs" onClick={()=>{
                props.changeBool('accordionThurs')
            }}>Thursday, October 10th</button>
            <Collapse in={props.accordionThurs}>
                <div className="thurs">
                    <p className="thurs" style={{fontWeight: 'bold'}}>During the day:</p>
                    <p className="thurs">During the day we'll be choosing a spot with great Fall foliage. 
                    We were thinking today would be the day we'd travel further out for a hike with spectacular 
                    views of rolling hills filled with various shades of reds, oranges, yellows and greens, 
                    but we need to see who is available and wanting to join and what cars we have available 
                    to us. Even if it's not doable to travel further, we could hike Blue Job Mountain or 
                    one of the other more local spots. Other nature activities are a possibility too. </p>
                    <p className="thurs" style={{fontWeight: 'bold'}}>Post-hike food:</p>
                    <p className="thurs">After our hike, we'll find a local spot to get food at, which I have 
                    ideas as to what, but we can choose closer to the time. </p>
                    <p className="thurs" style={{fontWeight: 'bold'}}>Evening:</p>
                    <p className="thurs">Thursday night I'll need to be home setting anything up that can be setup
                    closer to the time. If you are feeling creative, come on by!</p>
                </div>
            </Collapse>
            <button className="eventAccordion accordionFri" onClick={()=>{
                props.changeBool('accordionFri')
            }}>Friday, October 11th</button>
            <Collapse in={props.accordionFri}>
                <div className="fri">
                    <p className="fri" style={{fontWeight: 'bold'}}>Early morning 7-8am:</p>
                    <p className="fri">Early morning hike with Jackson Bear 
                    at <a href="https://goo.gl/maps/C5HgH6UrYhNB85Z68">Wagon Hill</a>. 
                    After Wagon Hill, anyone who is interested can join us for an apple cider 
                    donut or another treat from <a href="https://emeryfarm.com/">Emery Farm</a>.</p>
                    <p className="fri" style={{fontWeight: 'bold'}}>12pm:</p>
                    <p className="fri">Apple and pumpkin picking at <a href="http://www.butternutfarm.net/">Butternut Farm</a>. 
                    We will be purchasing an assortment of pumpkins for the wedding, which people can join us for 
                    optional pumpkin carving fun afterwards!</p>
                    <p className="fri" style={{fontWeight: 'bold'}}>~3pm:</p>
                    <p className="fri">Post-pumpkin picking, we'll head back to our place (same location as the wedding venue)
                    for pumpkin carving. We'll lay down tarps for for anyone to carve a pumpkin on. 
                    We'll order pizza from Panzanellas too. Come carve a pumpkin or just come and hang out!</p>
                </div>
            </Collapse>
            <button className="eventAccordion accordionSun" onClick={()=>{
                props.changeBool('accordionSun')
            }}>Sunday, October 13th</button>
            <Collapse in={props.accordionSun}>
                <div className="sun">
                    <p className="sun" style={{fontWeight: 'bold'}}>Early:</p>
                    <p className="sun">Hike with Jackson Bear at our local sanctuary, Terninko.</p>
                    <p className="sun" style={{fontWeight: 'bold'}}>Early afternoon:</p>
                    <p className="sun">Stroll around Newmarket by the water and grab lunch downtown 
                    at Riverworks.</p>
                    <p className="sun" style={{fontWeight: 'bold'}}>~5 or 6pm</p>
                    <p className="sun">We will be going to a brewery or bar in the afternoon. 
                    Top picks include <a href="https://stonefacebrewing.com/">Stoneface Brewing </a>  
                    and <a href="https://www.thirstymoosetaphouse.com/dover/">Thirsty Moose in Dover</a>.</p>
                    <p className="sun" style={{fontWeight: 'bold'}}>~8pm:</p>
                    <p className="sun">Haunted fun at Haunted Overload in Lee! Fun fact, the bride 
                    and some of the bridesmaids will be actors in this haunted house the following Friday. 
                    For this day, we will simply be victims same as yourselves!</p>
                </div>
            </Collapse>
            <button className="eventAccordion accordionMon" onClick={()=>{
                props.changeBool('accordionMon')
            }}>Monday, October 14th</button>
            <Collapse in={props.accordionMon}>
                <div className="mon">
                    <p className="mon" style={{fontWeight: 'bold'}}>All day:</p>
                    <p className="mon">A group of us will be driving down the coast into Massachusetts, 
                    with stops in Newburyport, Beverly, Salem, and finally Boston. Following day(s) we'll 
                    likely be visiting Boston again.</p>
                </div>
            </Collapse>
        </div>
    );
  }

  Events.propTypes = {
    changeBool: PropTypes.func.isRequired,
    accordionThurs: PropTypes.bool.isRequired,
    accordionFri: PropTypes.bool.isRequired,
    accordionSun: PropTypes.bool.isRequired,
    accordionMon: PropTypes.bool.isRequired
  };
  
  export default Events;