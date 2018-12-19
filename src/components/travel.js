import React from 'react';
import {
    Collapse
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function Travel (props) {
    const url = `https://www.google.com/maps/embed/v1/place?key=${props.google_api}&q=nottingham%2C%20nh`;
    return (
        <div className="callout">
            <h1>Travel</h1>
            <hr />
            <div className="detailText">
                <div className="detailTextIndiv">
                    <p className="val">
                    Depending on where you are traveling from, there's a variety of travel 
                    options to our area. There are also a variety of Airbnb homes and hotels 
                    nearby. However, this is a common time for people to travel to New England. 
                    This is the best time to come out in fact, because of the beautiful Fall foliage! 
                    Therefore, it is important to book a good amount in advance because the best 
                    places get taken the fastest. <br /><br/>
                    We are available to help out with planning, so please get in contact!
                    </p>
                </div>
            </div>
            <hr/>
            <button className="travelAccordion accordionAir" onClick={()=>{
                props.changeBool('accordionAir')
            }}>Airlines</button>
            <Collapse in={props.accordionAir}>
                <div className="air">
                    <p className="air" style={{fontWeight: 'bold'}}>Manchester-Boston Regional Airport (MHT):</p>
                    <p className="air">Manchester-Boston Regional Airport is only about 35 minutes 
                    from our home in Nottingham. It is by far the most convenient to getting to our
                    area, but we have yet to see any direct flights from the Bay Area. It is definitely 
                    worth checking what is available regardless, though you'll likely find much better deals
                    flying into Boston. Since this is a small airport, it is easy to find your way around. </p>
                    <p className="air" style={{fontWeight: 'bold'}}>Boston Logan Airport (BOS):</p>
                    <p className="air">While Manchester airport is closer, Boston Logan Airport is around an hour
                    and 20 minutes from Nottingham, and there are direct bus lines that travel to our area 
                    (see the public transportation section, the best option being C&J). The airport is easy to 
                    manuever around and the bus lines are right outside the door where you get your luggage.</p>
                </div>
            </Collapse>
            <button className="travelAccordion accordionBus" onClick={()=>{
                props.changeBool('accordionBus')
            }}>Public transportation</button>
            <Collapse in={props.accordionBus}>
                <div className="bus">
                    <p className="bus" style={{fontWeight: 'bold'}}>
                    C&J Bus:</p>
                    <p className="bus">Bus lines that travel between Massachusetts, 
                    New York, Maine, and New Hampshire. There are direct lines 
                    between the Boston airport and Portsmouth, which is a half hour 
                    from Nottingham. There's also a direct line from downtown NYC 
                    (Port Authority) to Portsmouth. There are cheaper buses than C&J around, 
                    but we had taken C&J many times at this point and they have reasonable 
                    rates, are consistently reliable, and their buses are nice (bathrooms, 
                    free water bottles and newspapers, outlets, comfy chairs, etc.).</p>
                    <p className="bus" style={{fontWeight: 'bold'}}>
                    Train:</p>
                    <p className="bus">Amtrak has a station right nearby us, in Durham and Exeter (both NH). 
                    However, there aren't any trains which travel directly from the airport. 
                    If you are comfortable transferring, you could travel from many locations
                    right to Durham or Exeter, which are only around 10-20 minutes away from us. 
                    That being said, I can't make the same comments as C&J for Amtrak in regards 
                    to reliability, though some people have had much better experiences.</p>
                </div>
            </Collapse>
            <button className="travelAccordion accordionCar" onClick={()=>{
                props.changeBool('accordionCar')
            }}>Driving</button>
            <Collapse in={props.accordionCar}>
                <div className="car">
                    <p className="car" style={{fontWeight: 'bold'}}>Rental cars:</p>
                    <p className="car">There are many car rental agencies around the Boston airport, 
                    and there is an Enterprise car rental right nearby in Durham, NH. Enterprise will 
                    even drive to you to pick you up! 
                    </p>
                </div>
            </Collapse>
            <button className="travelAccordion accordionStay" onClick={()=>{
                props.changeBool('accordionStay')
            }}>Stay</button>
            <Collapse in={props.accordionStay}>
                <div className="stay">
                    <p className="stay" style={{fontWeight: 'bold'}}>Airbnb:</p>
                    <p className="stay">There are Airbnbs in Nottingham and surrounding areas.</p>
                    <p className="stay" style={{fontWeight: 'bold'}}>Hotels:</p>
                    <p className="stay">There are hotels in surrounding cities, including Durham, 
                    Exeter, Dover, Portsmouth, and more. For higher-end accomodations, see the well regarded 
                    local hotel, the <a href="https://www.threechimneysinn.com/">Three Chimneys Inn</a>. 
                    <a href="https://www.silverfountain.com/">The Silver Fountain</a> in Dover 
                    (~ 15 min from us) is a gorgeous option as well. There are also a variety of 
                    inns and hotels around.</p>
                    <hr />
                    <p className="stay" style={{fontStyle: 'italic'}}>
                    We would be happy to make arrangements for any accomodations, and are expecting to do so. 
                    Please let us know if you'd like us to help plan your stay. 
                    </p>
                </div>
            </Collapse>
            <br/><br/>
            <iframe
                title="googleMaps"
                frameBorder="0" 
                style={{border:0, margin: '0', padding: '0', float: 'none', width: '100%', minHeight: '300px'}}
                src={url} allowFullScreen>
            </iframe>
        </div>
    );
  }
  
  Travel.propTypes = {
    google_api: PropTypes.string.isRequired,
    changeBool: PropTypes.func.isRequired,
    accordionAir: PropTypes.bool.isRequired,
    accordionBus: PropTypes.bool.isRequired,
    accordionCar: PropTypes.bool.isRequired,
    accordionStay: PropTypes.bool.isRequired
  };
  
  export default Travel;