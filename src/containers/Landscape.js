import React, {Component} from 'react';
import {Grid, Button, Row, Col, Thumbnail,Image, Modal} from 'react-bootstrap';
import 'react-bootstrap-carousel';
import './Landscape.css';
import Pic1 from './Pictures/Pic1.JPG';
import Pic2 from './Pictures/Pic2.JPG';
import Pic3 from './Pictures/Pic3.JPG';
import Pic4 from './Pictures/Pic4.JPG';
import Pic5 from './Pictures/Pic5.JPG';
import Pic6 from './Pictures/Pic6.JPG';

 class MyLargeModal1 extends React.Component {
	render() {
		return (
      //modals for images. pic 1
      <div>
			<Modal
				{...this.props}
				bsSize="medium"
				aria-labelledby="image1"
			>
				<Modal.Header closeButton>
					<Modal.Title id="image1">Elephant</Modal.Title>
				</Modal.Header>
				<Modal.Body>


          <Image src={Pic1} alt="242x240" width={280} height={400} />

				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>


      </div>
		);
	}
}

//for pic 2

class MyLargeModal2 extends React.Component {
 render() {
   return (

     <div>
     <Modal
       {...this.props}
       bsSize="medium"
       aria-labelledby="image2"
     >
       <Modal.Header >
         <Modal.Title id="image2">Elephant</Modal.Title>
       </Modal.Header>
       <Modal.Body>


         <Image src={Pic2} alt="242x240" width={280} height={400} />

       </Modal.Body>
       <Modal.Footer>
         <Button onClick={this.props.onHide}>Close</Button>
       </Modal.Footer>
     </Modal>


     </div>
   );
 }
}

//for pic 3
class MyLargeModal3 extends React.Component {
 render() {
   return (

     <div>
     <Modal
       {...this.props}
       bsSize="medium"
       aria-labelledby="image3"
     >
       <Modal.Header closeButton>
         <Modal.Title id="image3">Elephant</Modal.Title>
       </Modal.Header>
       <Modal.Body>


         <Image src={Pic3} alt="242x240" width={280} height={400} />

       </Modal.Body>
       <Modal.Footer>
         <Button onClick={this.props.onHide}>Close</Button>
       </Modal.Footer>
     </Modal>


     </div>
   );
 }
}

//for pic 4
class MyLargeModal4 extends React.Component {
 render() {
   return (

     <div>
     <Modal
       {...this.props}
       bsSize="medium"
       aria-labelledby="image4"
     >
       <Modal.Header closeButton>
         <Modal.Title id="image4">Elephant</Modal.Title>
       </Modal.Header>
       <Modal.Body>


         <Image src={Pic4} alt="242x240" width={280} height={400} />

       </Modal.Body>
       <Modal.Footer>
         <Button onClick={this.props.onHide}>Close</Button>
       </Modal.Footer>
     </Modal>


     </div>
   );
 }
}

//for pic 5
class MyLargeModal5 extends React.Component {
 render() {
   return (

     <div>
     <Modal
       {...this.props}
       bsSize="medium"
       aria-labelledby="image5"
     >
       <Modal.Header closeButton>
         <Modal.Title id="image5">Elephant</Modal.Title>
       </Modal.Header>
       <Modal.Body>


         <Image src={Pic5} alt="242x240" width={280} height={400} />

       </Modal.Body>
       <Modal.Footer>
         <Button onClick={this.props.onHide}>Close</Button>
       </Modal.Footer>
     </Modal>


     </div>
   );
 }
}

//for pic 6
class MyLargeModal6 extends React.Component {
 render() {
   return (

  
     <Modal
       {...this.props}
       bsSize="medium"
       aria-labelledby="image6"
     >
       <Modal.Header closeButton>
         <Modal.Title id="image6">Elephant</Modal.Title>
       </Modal.Header>
       <Modal.Body>


         <Image src={Pic2} alt="242x240" width={280} height={400} />

       </Modal.Body>
       <Modal.Footer>
         <Button onClick={this.props.onHide}>Close</Button>
       </Modal.Footer>
     </Modal>

   );
 }
}


export default class Landscape extends Component{
  constructor(...args) {
  		super(...args);

  		this.state = {  lgShow: false };
  	}
  render(){

    let lgClose = () => this.setState({ lgShow: false });
    return(


  <div className="thumbContainer">
    <div className="thumbnails">
      <Grid>
        <Row>
          <Col xs={6} md={4}>

            <Thumbnail src={Pic1} alt="242x240" >
            <h3>Elephant</h3>
            <p>Mysore zoo</p>
            <p>
              <Button bsStyle="primary">Like</Button>
              {' '}
              <Button bsStyle="default">Dislike</Button>&nbsp;
              <Button
        					bsStyle="primary"
        					onClick={() => this.setState({ lgShow: true })}>Show</Button>
                  <MyLargeModal1 show={this.state.lgShow} onHide={lgClose} />
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
              &nbsp;
              <Button
        					bsStyle="primary"
        					onClick={() => this.setState({ lgShow: true })}>Show</Button>
                  <MyLargeModal2 show={this.state.lgShow} onHide={lgClose} />
            </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src={Pic3} alt="242x240" >
            <h3>Elephant</h3>
            <p>Mysore zoo</p>
            <p>
              <Button bsStyle="primary">Like</Button>
              {' '}
              <Button bsStyle="default">Dislike</Button>
            </p> &nbsp;
            <Button
                bsStyle="primary"
                onClick={() => this.setState({ lgShow: true })}>Show</Button>
                <MyLargeModal3 show={this.state.lgShow} onHide={lgClose} />
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
            &nbsp;
            <Button
                bsStyle="primary"
                onClick={() => this.setState({ lgShow: true })}>Show</Button>
                <MyLargeModal4 show={this.state.lgShow} onHide={lgClose} />
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
            &nbsp;
            <Button
                bsStyle="primary"
                onClick={() => this.setState({ lgShow: true })}>Show</Button>
                <MyLargeModal5 show={this.state.lgShow} onHide={lgClose} />
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
            &nbsp;
            <Button
                bsStyle="primary"
                onClick={() => this.setState({ lgShow: true })}>Show</Button>
                <MyLargeModal6 show={this.state.lgShow} onHide={lgClose} />
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    </div>
  </div>


    );
  }

}
