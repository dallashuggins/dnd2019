import React from 'react';
import {
    Carousel
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import kancamagus1 from '../media/kancamagus1.jpg';
import wagon_hill1 from '../media/wagon_hill1.jpg';
import lubberland1 from '../media/lubberland1.jpg';
import stowe1 from '../media/stowe1.jpg';
import newmarket1 from '../media/newmarket1.jpg';
import burlington from '../media/burlington.jpg';
import salem from '../media/salem.jpg';
import doefarm from '../media/doefarm.jpg';
import acadia from '../media/acadia.jpg';

function FallCarousel (props) {
    return (
        <div className="carousel">
            <Carousel>
                <Carousel.Item>
                    <img width={900} height={300} alt="Lubberland" src={lubberland1} />
                    <Carousel.Caption>
                    <h3>Lubberland Creek Preserve</h3>
                    <p>Newmarket, NH</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={300} alt="Kancamagus" src={kancamagus1} />
                    <Carousel.Caption>
                    <h3>Kancamagus Highway</h3>
                    <p>Lincoln, NH</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={300} alt="900x500" src={wagon_hill1} />
                    <Carousel.Caption>
                    <h3>Wagon Hill</h3>
                    <p>Durham, NH</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={300} alt="Stowe Vermont" src={stowe1} />
                    <Carousel.Caption>
                    <h3>Downtown Stowe</h3>
                    <p>Stowe, VT</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={300} alt="Newmarket Mills" src={newmarket1} />
                    <Carousel.Caption>
                    <h3>Newmarket Mills</h3>
                    <p>Newmarket, NH</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={300} alt="Salem" src={salem} />
                    <Carousel.Caption>
                    <h3>Downtown Salem during Halloween</h3>
                    <p>Salem, MA</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={300} alt="Doe Farm" src={doefarm} />
                    <Carousel.Caption>
                    <h3>Doe Farm</h3>
                    <p>Durham, NH</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={300} alt="Burlington" src={burlington} />
                    <Carousel.Caption>
                    <h3>Downtown Burlington</h3>
                    <p>Burlington, VT</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={300} alt="Acadia" src={acadia} />
                    <Carousel.Caption>
                    <h3>Beehive Trail, Acadia National Park</h3>
                    <p>Bar Harbor, ME (I hear it's even more beautiful during Fall)</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }
  
  FallCarousel.propTypes = {
  };
  
  export default FallCarousel;