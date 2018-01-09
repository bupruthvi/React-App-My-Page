import React, {Component} from 'react';
import {Grid, Button, Row, Col, Thumbnail} from 'react-bootstrap';
import 'react-bootstrap-carousel';
import './Landscape.css';
import Pic1 from './Pictures/Pic1.JPG';
import Pic2 from './Pictures/Pic2.JPG';
import Pic3 from './Pictures/Pic3.JPG';
import Pic4 from './Pictures/Pic4.JPG';
import Pic5 from './Pictures/Pic5.JPG';
import Pic6 from './Pictures/Pic6.JPG';







export default class Landscape extends Component{
  render(){
    return(
  <div className="thumbContainer">
    <div className="thumbnails">
      <Grid>
        <Row>
          <Col xs={6} md={4}>
          

            <Thumbnail src={Pic1} alt="242x240">
            <h3>Elephant</h3>
            <p>Mysore zoo</p>
            <p>
              <Button bsStyle="primary">Like</Button>
              {' '}
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>

          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic2} alt="242x240">
            <h3>Elephant</h3>
            <p>Mysore zoo</p>
            <p>
              <Button bsStyle="primary">Like</Button>
              {' '}
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic3} alt="242x240">
            <h3>Elephant</h3>
            <p>Mysore zoo</p>
            <p>
              <Button bsStyle="primary">Like</Button>
              {' '}
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic4} alt="242x240">
            <h3>Elephant</h3>
            <p>Mysore zoo</p>
            <p>
              <Button bsStyle="primary">Like</Button>
              {' '}
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic5} alt="242x240">
            <h3>Elephant</h3>
            <p>Mysore zoo</p>
            <p>
              <Button bsStyle="primary">Like</Button>
              {' '}
              <Button bsStyle="default">Dislike</Button>
            </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic6} alt="242x240">
            <h3>Elephant</h3>
            <p>Mysore zoo</p>
            <p>
              <Button bsStyle="primary">Like</Button>
              {' '}
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
