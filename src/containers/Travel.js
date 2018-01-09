import React, {Component} from 'react';
import {Grid, Button, Row, Col, Thumbnail} from 'react-bootstrap';

import './Travel.css';

//images import
import Pic12 from './Pictures/Pic12.JPG';
import Pic13 from './Pictures/Pic13.JPG';
import Pic14 from './Pictures/Pic14.JPG';
import Pic15 from './Pictures/Pic15.JPG';
import Pic16 from './Pictures/Pic16.JPG';
import Pic17 from './Pictures/Pic17.JPG';

//code begins here

export default class Wedding extends Component{
  render(){
    return(
    <div className="thumbContainer">
    <div className="thumbnails">
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic12} alt="242x240">
            <h3>Demo</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Like</Button>&nbsp;
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic13} alt="242x240">
            <h3>Demo</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Like</Button>&nbsp;
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic14} alt="242x240">
            <h3>Demo</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Like</Button>&nbsp;
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic15} alt="242x240">
            <h3>Demo</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Like</Button>&nbsp;
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic16} alt="242x240">
            <h3>Demo</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Like</Button>&nbsp;
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic17} alt="242x240">
            <h3>Demo</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Like</Button>&nbsp;
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    </div>
  </div>

    );
  }

}
