import React, {Component} from 'react';
import {url} from 'react-bootstrap';


  const SlideOne= (props) => {

    let background = {
      backgroundImage: url('./Pictures/Pic26.JPG'),
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    return <div style={background} className="slide"></div>;
  }

export default SlideOne;
