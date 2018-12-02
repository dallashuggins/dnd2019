import React from 'react';
import PropTypes from 'prop-types';
import FallCarousel from './carousel';

function Plans (props) {
    return (
        <div className="callout">
            <h1>What To Do</h1>
            <hr/>
            <div className="detailText">
                <div className="detailTextIndiv">
                    <p className="val">
                    Nottingham is located in the Seacoast area of New Hampshire. 
                    We live ~ 30 minutes from the borders with Massachusetts and Maine. 
                    We are also about an hour from Salem (Massachusetts), around an hour to 
                    an hour and a half from Boston and Portland (Maine), a couple hours 
                    from the White Mountains, around 3 hours from Burlington, Vermont, 
                    and about 5 hours from both Toronto and NYC. 
                    <br/><br/>
                    We added some photos below of local areas to help with some ideas 
                    when planning your trip, though we would absolutely love to help plan 
                    anyone's trip out here or offer more detailed advice. Just let us know! 
                    </p>
                </div>
            </div>
            <hr />
            <FallCarousel 
            />
        </div>
    );
  }
  
  Plans.propTypes = {
    accordionCity: PropTypes.bool.isRequired,
    accordionFall: PropTypes.bool.isRequired,
    accordionHalloween: PropTypes.bool.isRequired,
    changeBool: PropTypes.func.isRequired
  };
  
  export default Plans;