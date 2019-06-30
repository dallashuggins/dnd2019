import React from 'react';
import {
    Collapse
} from 'react-bootstrap';
import PropTypes from 'prop-types';

let hotels = [
    {
        url: 'https://www.silverfountain.com/',
        name: 'Silver Fountain Inn',
        estimatedDistance: '15 minutes',
        distance: '17 minutes',
        city: 'Dover'
    },
    {
        url: 'https://www.wyndhamhotels.com/days-inn/dover-new-hampshire/days-inn-dover-durham-downtown/overview',
        name: 'Days Inn by Wyndham Dover',
        estimatedDistance: '20 minutes',
        distance: '21 minutes',
        city: 'Dover'
    },
    {
        url: 'https://www.marriott.com/hotels/travel/psmex-fairfield-inn-and-suites-portsmouth-exeter/',
        name: 'Fairfield Inn & Suites Portsmouth Exeter',
        estimatedDistance: '20 minutes',
        distance: '20 minutes',
        city: 'Exeter'
    },
    {
        url: 'https://www.choicehotels.com/new-hampshire/dover/comfort-inn-hotels/nh014/rates?checkInDate=2019-10-11&checkOutDate=2019-10-13',
        name: 'Comfort Inn & Suites',
        estimatedDistance: '20 minutes',
        distance: '20 minutes',
        city: 'Dover'
    },
    {
        url: 'https://hamptoninn3.hilton.com/en/hotels/new-hampshire/hampton-inn-dover-PSMDOHX/index.html',
        name: 'Hampton Inn Dover',
        estimatedDistance: '20 minutes',
        distance: '20 minutes',
        city: 'Dover'
    },
    {
        url: 'https://www.wyndhamhotels.com/microtel/dover-new-hampshire/microtel-inn-and-suites-dover-nh/overview',
        name: 'Microtel Inn & Suites by Wyndham Dover',
        estimatedDistance: '20 minutes',
        distance: '21 minutes',
        city: 'Dover'
    },
    {
        url: 'https://www.thegarrisonhotel.com/at-our-hotel/rooms.html',
        name: 'The Garrison Hotel',
        estimatedDistance: '15 minutes',
        distance: '15 minutes',
        city: 'Dover'
    }
];

let airbnbs = [
    {
        url: 'https://www.airbnb.com/rooms/2130259',
        name: 'In the country but near the action.',
        estimatedDistance: '5 minutes',
        city: 'Lee, NH',
        guests: '2'
    },
    {
        url: 'https://www.airbnb.com/rooms/14518381',
        name: 'In-house suite on a farm setting.',
        estimatedDistance: '5 minutes',
        city: 'Lee, NH',
        guests: '4'
    },
    {
        url: 'https://www.airbnb.com/rooms/34090026',
        name: 'Quiet Neighborhood Home Away From Home',
        estimatedDistance: '5 minutes',
        city: 'Lee, NH',
        guests: '4'
    },
    {
        url: 'https://www.airbnb.com/rooms/19730802',
        name: 'Spacious private Studio in walkable New England.',
        estimatedDistance: '13 minutes',
        city: 'Newmarket, NH',
        guests: '3'
    },
    {
        url: 'https://www.airbnb.com/rooms/19324137?s=51',
        name: 'In town Durham NH home-walk to UNH',
        estimatedDistance: '15 minutes',
        city: 'Durham, New Hampshire',
        guests: '7'
    },
    {
        url: 'https://www.airbnb.com/rooms/20883141?s=51',
        name: 'Lovely One of a Kind Lake House',
        estimatedDistance: '18 minutes',
        city: 'Barrington, NH',
        guests: '3'
    },
    {
        url: 'https://www.airbnb.com/rooms/6019156',
        name: 'Recently renovated Lake House',
        estimatedDistance: '18 minutes',
        city: 'Barrington, NH',
        guests: '8'
    },
    {
        url: 'https://www.airbnb.com/rooms/19923934?s=51',
        name: 'Private Sanctuary 15 min to Ocean & Portsmouth!',
        estimatedDistance: '20 minutes',
        city: 'Stratham, New Hampshire',
        guests: '10'
    },
    {
        url: 'https://www.airbnb.com/rooms/18876199',
        name: 'Beautiful Two Bedroom Open Concept Townhouse',
        estimatedDistance: '22 minutes',
        city: 'Exeter, NH',
        guests: '5'
    },
    {
        url: 'https://www.airbnb.com/rooms/6091505?s=51',
        name: 'Lovely waterfront home. Portsmouth',
        estimatedDistance: '27 minutes',
        city: 'Portsmouth, New Hampshire',
        guests: '8'
    },
    {
        url: 'https://www.airbnb.com/rooms/25366193?s=51',
        name: 'Ocean view cottage w/ grill-near Long Sands Beach',
        estimatedDistance: '32 minutes',
        city: 'York, Maine',
        guests: '8'
    },
    {
        url: 'https://www.airbnb.com/rooms/20697116?s=51',
        name: 'Panoramic Water View Home',
        estimatedDistance: '28 minutes',
        city: 'Kittery, Maine',
        guests: '8'
    },
    {
        url: 'https://www.airbnb.com/rooms/11730562',
        name: 'The West Wing',
        estimatedDistance: '30 minutes',
        city: 'Strafford, NH',
        guests: '4'
    },
    {
        url: 'https://www.airbnb.com/rooms/31269977',
        name: 'Entire Home In Lovely Strafford, NH',
        estimatedDistance: '30 minutes',
        city: 'Strafford, NH',
        guests: '5'
    },
];

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
            <button className="travelAccordion accordionAll" onClick={()=>{
                props.changeBool('accordionAll')
            }}>Our suggested travel plan</button>
            <Collapse in={props.accordionAll}>
                <div className="all">
                    <p className="all" style={{fontWeight: 'bold'}}>Fly into Boston Logan Airport (BOS):</p>
                    <p className="all">Boston Logan Airport is around an hour and 20 minutes from 
                    Nottingham. It is usually the cheapest option to fly into and there are direct flights 
                    from SFO and other major airports.</p>
                    <p className="all" style={{fontWeight: 'bold'}}>Take C&J from the airport:</p>
                    <p className="all">When you walk out of the terminal near the baggage claim, follow the 
                    orange signs outside the airport that lead you to the Scheduled Bus section. Look for the 
                    C&J, it comes every hour and does quick stops only in Newburyport, Portsmouth, and 
                    Dover. Take the C&J to Dover, NH. <br/><br/>
                    It costs $24 one-way or $48 round trip. The tickets are available for purchase/printing online. 
                    If you do not print a ticket ahead of time, you can give them your license to hold onto until you 
                    reach Dover, where you go inside and pay for the ticket and get your license back. Also, 
                    if you buy online and miss the time for your ticket, don't fret. The tickets are technically 
                    non-reservation, and can be used for any date/time as long as the ticket is valid. Reserving 
                    tickets just helps give C&J an idea of how many people will be on the bus.</p>
                    <p className="all" style={{fontWeight: 'bold'}}>Get to your hotel from C&J:</p>
                    <p className="all">From the Dover C&J, if you're staying at the Homewood Suites, 
                    which we have a block of rooms for, you can literally walk to your hotel. There is 
                    a crosswalk outside the C&J, and once you cross the street you're there. <br/><br/>
                    If you did not book a hotel at the Homewood Suites OR if you plan to get a rental 
                    car regardless, the Enterprise in Somersworth will pick you up at the Dover C&J bus terminal.</p>
                </div>
            </Collapse>
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
                        We currently have a block of 10 rooms on hold at the <a href="https://homewoodsuites3.hilton.com/en/hotels/new-hampshire/homewood-suites-by-hilton-dover-PSMDVHW/index.html">Homewood Suites</a>, 
                        which is in Dover (20 minutes away). There is a discounted rate of $189/$199, as long as you book before September 1st. 
                        However, Sept 1st would be very late to book, and they likely will be taken long before then, so please let me know if you 
                        plan to stay here but can't book yet, so I can reserve a larger block of rooms. 
                    </p>
                    <p className="stay">
                        Guests can book within this block of rooms by either calling the hotel at (603) 516-0929 and 
                        reserving under the "Huggins block", or by <a href="http://homewoodsuites3.hilton.com/en/hotels/new-hampshire/homewood-suites-by-hilton-dover-PSMDVHW/index.html">reserving a room online</a> with 
                        the group code HUG. There will be a free shuttle running between this hotel 
                        and our home on the day of the wedding; pickup times delivering to the wedding are at 1:30pm and 2:30pm and 
                        pickup times delivering back to the hotel are at 7pm and 9pm.
                    </p>
                    <p className="stay">
                    There are also other hotels in surrounding cities, including Durham, Exeter, Dover, Portsmouth, and more. 
                    Local hotels include:
                    <ul>
                        {hotels.map(hotel =>
                            <li key={hotel.name}>
                                <a target="_blank" rel="noopener noreferrer" href={hotel.url}>{hotel.name}</a> in {hotel.city} ({hotel.estimatedDistance} away)
                            </li>
                        )}
                    </ul>
                    </p>
                    <p className="stay" style={{fontWeight: 'bold'}}>Airbnb:</p>
                    <p className="stay">
                    There are Airbnbs in Nottingham and surrounding areas. Some notable mentions are listed below. 
                    Specific addresses are not provided on Airbnb, so the distances are just general estimates. 
                    <ul>
                        {airbnbs.map(airbnb =>
                            <li key={airbnb.name}>
                                <a target="_blank" rel="noopener noreferrer" href={airbnb.url}>{airbnb.name}</a> in {airbnb.city} and can fit {airbnb.guests} guests ({airbnb.estimatedDistance} away).
                            </li>
                        )}
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
    accordionStay: PropTypes.bool.isRequired,
    accordionAll: PropTypes.bool.isRequired
  };
  
  export default Travel;