import React, {Component} from 'react';
import {Button, FormGroup, FormControl, ControlLabel, Modal} from 'react-bootstrap';
import './Order.css';

export default class Order extends Component{
  constructor(props){
    super(props);



    this.state = {
      email: "",
      phone: "",
      description:"describe your needs.",
      open: false
    };
  }

 buttonPressed(){
   alert("successful");
 }

  validateForm(){
    return this.state.email.length>0 && this.state.phone.length>0;
  }

  handleChange=event =>{

    this.setState({
      [event.target.id]:event.target.value
    });
  }

  handleSubmit=event =>{
    event.preventDefault();
  }

  handleRequestButton(){
    <Modal/>
  }
  render(){
    return(
      <div className="Order">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlID="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              placeholder="ex: brocko@mail.com"
              value={this.props.email}
              onChange={this.handleChange}

            />
          </FormGroup>
          <FormGroup controlID="phone" bsSize="large">
          <ControlLabel>Phone number</ControlLabel>

            <FormControl
              type="number" min="0" step="1" max="9"
              pattern="^[0-9]"
              placeholder="ex: 999-999-9999"
              onChange={this.handleChange}
              value={this.props.phone}
            />
          </FormGroup>
          <FormGroup className="description" bsSize="large">
          <ControlLabel>Describe the event:</ControlLabel>
          <FormControl
          rows="3"
          value={this.props.description}
          placeholder={this.state.description}
          />
          </FormGroup>

          <Button className="orderButton"
            block
            bsSize="large"
            disabled={this.validateForm()}
            type="submit"
            onClick={this.buttonPressed}
            
          >
          Request
          </Button>
          
        </form>

      </div>
    );
  }
}
