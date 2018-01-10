import React, {Component} from 'react';
import './Home.css';
import Slider from './Sliders/Slider';



export default class homescreen extends Component{
  render(){
    return(
      <div className="Home">


        <div className="HomeDetails">
          <h1>Welcome to <b>Brocko Photography</b></h1>
          <p>a <b>Pruthvi Raj</b> Initiative.</p>
          <div className="Slider">
          <Slider />
          </div>
        </div>

      </div>

    )
  }
}
