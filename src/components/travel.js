import React from 'react';
import {
    Collapse
} from 'react-bootstrap';
import PropTypes from 'prop-types';

let hotels = {
    silverFountain: {
        url: 'https://www.silverfountain.com/',
        name: 'Silver Fountain Inn',
        estimatedDistance: '15 minutes',
        distance: '17 minutes',
        city: 'Dover'
    },
    wyndhamInn: {
        url: 'https://www.wyndhamhotels.com/days-inn/dover-new-hampshire/days-inn-dover-durham-downtown/overview',
        name: 'Days Inn by Wyndham Dover',
        estimatedDistance: '20 minutes',
        distance: '21 minutes',
        city: 'Dover'
    },
    fairfieldInn: {
        url: 'https://www.marriott.com/hotels/travel/psmex-fairfield-inn-and-suites-portsmouth-exeter/',
        name: 'Fairfield Inn & Suites Portsmouth Exeter',
        estimatedDistance: '20 minutes',
        distance: '20 minutes',
        city: 'Exeter'
    },
    comfortInn: {
        url: 'https://www.choicehotels.com/new-hampshire/dover/comfort-inn-hotels/nh014/rates?checkInDate=2019-10-11&checkOutDate=2019-10-13',
        name: 'Comfort Inn & Suites',
        estimatedDistance: '20 minutes',
        distance: '20 minutes',
        city: 'Dover'
    },
    hamptonInn: {
        url: 'https://hamptoninn3.hilton.com/en/hotels/new-hampshire/hampton-inn-dover-PSMDOHX/index.html',
        name: 'Hampton Inn Dover',
        estimatedDistance: '20 minutes',
        distance: '20 minutes',
        city: 'Dover'
    },
    homewoodSuites: {
        url: 'https://homewoodsuites3.hilton.com/en/hotels/new-hampshire/homewood-suites-by-hilton-dover-PSMDVHW/index.html',
        name: 'Homewood Suites by Hilton Dover',
        estimatedDistance: '20 minutes',
        distance: '21 minutes',
        city: 'Dover'
    },
    microtelInn: {
        url: 'https://www.wyndhamhotels.com/microtel/dover-new-hampshire/microtel-inn-and-suites-dover-nh/overview',
        name: 'Microtel Inn & Suites by Wyndham Dover',
        estimatedDistance: '20 minutes',
        distance: '21 minutes',
        city: 'Dover'
    },
    garrisonHotel: {
        url: 'https://www.thegarrisonhotel.com/at-our-hotel/rooms.html',
        name: 'The Garrison Hotel',
        estimatedDistance: '15 minutes',
        distance: '15 minutes',
        city: 'Dover'
    }
};

let airbnbs = {
    lee1: {
        url: 'https://www.airbnb.com/rooms/17825340?s=51',
        name: 'Plumer Homestead',
        estimatedDistance: '5 minutes',
        city: 'Lee, New Hampshire',
        guests: '10'
    },
    durham1: {
        url: 'https://www.airbnb.com/rooms/19324137?s=51',
        name: 'In town Durham NH home-walk to UNH',
        estimatedDistance: '15 minutes',
        city: 'Durham, New Hampshire',
        guests: '7'
    },
    stratham1: {
        url: 'https://www.airbnb.com/rooms/19923934?s=51',
        name: 'Private Sanctuary 15 min to Ocean & Portsmouth!',
        estimatedDistance: '20 minutes',
        city: 'Stratham, New Hampshire',
        guests: '10'
    },
    portsmouth1: {
        url: 'https://www.airbnb.com/rooms/6091505?s=51',
        name: 'Lovely waterfront home. Portsmouth',
        estimatedDistance: '27 minutes',
        city: 'Portsmouth, New Hampshire',
        guests: '8'
    },
    york1: {
        url: 'https://www.airbnb.com/rooms/25366193?s=51',
        name: 'Ocean view cottage w/ grill-near Long Sands Beach',
        estimatedDistance: '32 minutes',
        city: 'York, Maine',
        guests: '8'
    },
    eliot1: {
        url: 'https://www.airbnb.com/rooms/7226918?s=51',
        name: 'Hidden Meadows Farm & Vineyard Overlook',
        estimatedDistance: '28 minutes',
        city: 'Eliot, Maine',
        guests: '8'
    },
    kittery1: {
        url: 'https://www.airbnb.com/rooms/20697116?s=51',
        name: 'Panoramic Water View Home',
        estimatedDistance: '28 minutes',
        city: 'Kittery, Maine',
        guests: '8'
    },
    test: {
        url: '',
        name: '',
        estimatedDistance: '0 minutes',
        city: 'City',
        guests: '0'
    }
};

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
                    options to our area. There are also a variety of Airbnb hotels and inns 
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
                    <p className="stay" style={{fontWeight: 'bold'}}>Hotels:</p>
                    <p className="stay">
                    There are hotels in surrounding cities, including Durham, Exeter, Dover, Portsmouth, and more. 
                    Local hotels include:
                    <ul>
                        <li><a href={hotels.silverFountain.url}>{hotels.silverFountain.name}</a> in {hotels.silverFountain.city} ({hotels.silverFountain.estimatedDistance} away)</li>
                        <li><a href={hotels.garrisonHotel.url}>{hotels.garrisonHotel.name}</a> in {hotels.garrisonHotel.city} ({hotels.garrisonHotel.estimatedDistance} away)</li>
                        <li><a href={hotels.wyndhamInn.url}>{hotels.wyndhamInn.name}</a> in {hotels.wyndhamInn.city} ({hotels.wyndhamInn.estimatedDistance} away)</li>
                        <li><a href={hotels.fairfieldInn.url}>{hotels.fairfieldInn.name}</a> in {hotels.fairfieldInn.city} ({hotels.fairfieldInn.estimatedDistance} away)</li>
                        <li><a href={hotels.comfortInn.url}>{hotels.comfortInn.name}</a> in {hotels.comfortInn.city} ({hotels.comfortInn.estimatedDistance} away)</li>
                        <li><a href={hotels.hamptonInn.url}>{hotels.hamptonInn.name}</a> in {hotels.hamptonInn.city} ({hotels.hamptonInn.estimatedDistance} away)</li>
                        <li><a href={hotels.homewoodSuites.url}>{hotels.homewoodSuites.name}</a> in {hotels.homewoodSuites.city} ({hotels.homewoodSuites.estimatedDistance} away)</li>
                        <li><a href={hotels.microtelInn.url}>{hotels.microtelInn.name}</a> in {hotels.microtelInn.city} ({hotels.microtelInn.estimatedDistance} away)</li>
                    </ul>
                    </p>
                    <p className="stay" style={{fontWeight: 'bold'}}>Airbnb:</p>
                    <p className="stay">
                    There are Airbnbs in Nottingham and surrounding areas. Some notable mentions are listed below. 
                    Specific addresses are not provided on Airbnb, so the distances are just general estimates. 
                    <ul>
                        <li><a href={airbnbs.lee1.url}>{airbnbs.lee1.name}</a> in {airbnbs.lee1.city} and can fit {airbnbs.lee1.guests} guests ({airbnbs.lee1.estimatedDistance} away).</li>
                        <li><a href={airbnbs.durham1.url}>{airbnbs.durham1.name}</a> in {airbnbs.durham1.city} and can fit {airbnbs.durham1.guests} guests ({airbnbs.durham1.estimatedDistance} away).</li>
                        <li><a href={airbnbs.stratham1.url}>{airbnbs.stratham1.name}</a> in {airbnbs.stratham1.city} and can fit {airbnbs.stratham1.guests} guests ({airbnbs.stratham1.estimatedDistance} away).</li>
                        <li><a href={airbnbs.portsmouth1.url}>{airbnbs.portsmouth1.name}</a> in {airbnbs.portsmouth1.city} and can fit {airbnbs.portsmouth1.guests} guests ({airbnbs.portsmouth1.estimatedDistance} away).</li>
                        <li><a href={airbnbs.york1.url}>{airbnbs.york1.name}</a> in {airbnbs.york1.city} and can fit {airbnbs.york1.guests} guests ({airbnbs.york1.estimatedDistance} away).</li>
                        <li><a href={airbnbs.eliot1.url}>{airbnbs.eliot1.name}</a> in {airbnbs.eliot1.city} and can fit {airbnbs.eliot1.guests} guests ({airbnbs.eliot1.estimatedDistance} away).</li>
                        <li><a href={airbnbs.kittery1.url}>{airbnbs.kittery1.name}</a> in {airbnbs.kittery1.city} and can fit {airbnbs.kittery1.guests} guests ({airbnbs.kittery1.estimatedDistance} away).</li>
                    </ul>
                    </p>
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