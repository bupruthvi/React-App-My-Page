import React, {Component} from 'react';
import {url} from 'react-bootstrap';


  const SlideThree= (props) => {

    let background = {
      backgroundImage: url('./Pictures/Pic28.JPG'),
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    return <div style={background} className="slide"></div>;
  }

export default SlideThree;
