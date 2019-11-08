import React from 'react';
import PropTypes from 'prop-types';

function ThankYou (props) {
    return (
        <div className="callout">
            <h1>Thank You!</h1>
            <hr />
            <div className="thanksText">
               <div className="thanksTextIndiv">
                    <p className="val">
                      Thank you so much for joining us for our special day!
                    </p>
                    <p className="val">
                      We were so incredibly excited to have so many of our loved ones come into town for our wedding day. 
                      It really meant the world to us. 
                    </p>
                    <p className="val">
                      The professional photos are going to be completed by December 2nd. We can't wait to get them back! 
                      Until then, we have gathered photos from others, and we posted a number of them on Facebook already. 
                      In addition, below are links to some different photos we already have.
                    </p>
                    <p className="val">
                      <ul>
                        <li>
                          <a href="https://iamsarahv.com/blog/elopements-intimate-weddings/portsmouth-nh-wedding-intimate-halloween/">
                            Nottingham NH Intimate Halloween-inspired wedding by Sarah V.
                          </a>
                        </li>
                        <li>
                          <a href="https://photos.app.goo.gl/mT4wkv6rvPB9rR7p6">
                            Google Photos shared album - Dallas & Drew's Wedding
                          </a>
                        </li>
                        <li>
                          <a href="https://photos.app.goo.gl/vKghCR3FCzSsLEBf8">
                            Google Photos shared album - Wedding Photo Booth
                          </a>
                        </li>
                      </ul>
                    </p>
                    <p className="val">
                      Love, 
                    </p>
                    <p className="key">
                      Dallas and Drew
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  ThankYou.propTypes = {
    // name: PropTypes.string.isRequired,
  };
  
  export default ThankYou;