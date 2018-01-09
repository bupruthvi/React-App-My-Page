import React, {Component} from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import './Order.css';

export default class Order extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: "",
      Phone: ""
    };


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
              //value={this.state.email}
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
              value={this.state.phone}
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            //disabled={!this.validateForm()}
            type="submit"
          >
          Order
          </Button>
        </form>

      </div>
    );
  }
}
