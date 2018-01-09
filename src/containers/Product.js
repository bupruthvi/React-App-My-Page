import React, {Component} from 'react';
import {Grid, Button, Row, Col, Thumbnail} from 'react-bootstrap';
import './Product.css';

//images import
import Pic7 from './Pictures/Pic7.JPG';
import Pic8 from './Pictures/Pic8.JPG';
import Pic9 from './Pictures/Pic9.JPG';
import Pic10 from './Pictures/Pic10.JPG';
import Pic11 from './Pictures/Pic11.JPG';
import rain from './Pictures/rain.JPG';

//code begins here

export default class Product extends Component{
  render(){
    return(
  <div className="thumbContainer">
    <div className="thumbnails">
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic7} alt="242x240">
            <h3>Demo</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Like</Button>&nbsp;
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic8} alt="242x240">
            <h3>Demo</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Like</Button>&nbsp;
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic9} alt="242x240">
            <h3>Demo</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Like</Button>&nbsp;
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic10} alt="242x240">
            <h3>Demo</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Like</Button>&nbsp;
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic11} alt="242x240">
            <h3>Demo</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Like</Button>&nbsp;
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={rain} alt="242x240">
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
