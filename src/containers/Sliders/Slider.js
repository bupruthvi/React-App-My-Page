import React, {Component} from 'react';
import {Carousel, img} from 'react-bootstrap';

export default class Slideshow extends Component{
  render(){
    return (
      <div className="ImageSlider">
        <Carousel className="carousel">
          <Carousel.Item>
          <image width={900} height={500} alt="900x500" src="src/containers/Pictures/Pic26.JPG" />

            <Carousel.Caption>
              <h3>First</h3>
              <p>This is awesome!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="src/containers/Pictures/Pic27.JPG" />
            <Carousel.Caption>
              <h3>First</h3>
              <p>This is awesome!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="src/containers/Pictures/Pic28.JPG" />
            <Carousel.Caption>
              <h3>First</h3>
              <p>This is awesome!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
