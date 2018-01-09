import React, {Component} from 'react';
import {url} from 'react-bootstrap';



  const SlideTwo= (props) => {

    let background = {
      backgroundImage: url('./Pictures/Pic27.JPG'),
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    return <div style={background} className="slide"></div>;
  }

export default SlideTwo;
