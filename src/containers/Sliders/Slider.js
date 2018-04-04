import React, {Component} from 'react';
import {Carousel, Image} from 'react-bootstrap';
import './Carousel.css';
import Pic26 from '../Pictures/Pic26.JPG';
import Pic27 from '../Pictures/Pic27.JPG';
import Pic28 from '../Pictures/Pic28.JPG';
import Pic29 from '../Pictures/Pic29.JPG';
import Pic30 from '../Pictures/Pic30.JPG';
import Pic31 from '../Pictures/Pic31.JPG';
import Pic32 from '../Pictures/Pic32.JPG';
import Pic33 from '../Pictures/Pic33.JPG';

export default class Slideshow extends Component{
  render(){
    return (
      <div className="carousel-container">
        <Carousel className="carousel" interval={2000} pushOnHover={true} >
          <Carousel.Item className="firstImage" >
          <Image  alt="900x500" src={Pic26} />

            <Carousel.Caption>
              <h3>The Oasis</h3>
              <p>Austin, TX</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="secondImage">
            <Image  alt="900x500" src={Pic27} />
            <Carousel.Caption>
              <h3>North Central Park</h3>
              <p>Laredo, TX</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="thirdImage">
            <Image  alt="900x500" src={Pic28} />
            <Carousel.Caption>
              <h3>Close up</h3>
              <p>Columbus, OH</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="fourthImage">
            <Image  alt="900x500" src={Pic29} />
            <Carousel.Caption>
              <h3>Golden Gate Bridge</h3>
              <p>San Fransisco, CA</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="fifthImage">
            <Image  alt="900x500" src={Pic30} />
            <Carousel.Caption>
              <h3>Wooden roof</h3>
              <p>Stanford, CA</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="sixthImage">
            <Image  alt="900x500" src={Pic31} />
            <Carousel.Caption>
              <h3>Love Lock</h3>
              <p>Austn, TX</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="seventhImage">
              <Image  alt="900x500" src={Pic32} />
              <Carousel.Caption>
                <h3>Waves</h3>
                <p>Kundapura, KA, IN</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="eighthImage">
                <Image  alt="900x500" src={Pic33} />
                <Carousel.Caption>
                  <h3>Pause</h3>
                  <p>Goa, IN</p>
                </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
