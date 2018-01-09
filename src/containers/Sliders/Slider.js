import React, {Component} from 'react';
import SliderOne from './SliderOne.js';
import SliderTwo from './SliderTwo.js';
import SliderThree from './SliderThree.js';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

export default class Slider extends Component{
  constructor(props){
    super(props);

    this.state = {
      slideCount: 1
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSLide.bind(this);
  }
  render(){
    return(

      <div className="slider">
      {this.state.slideCount === 1 ? <SliderOne /> : null}
      {this.state.slideCount === 2 ? <SliderTwo /> : null}
      {this.state.slideCount === 3 ? <SliderThree /> : null}

      <RightArrow nextSlide={this.nextSlide}/>
      <LeftArrow previousSlide={this.previousSlide}/>
      </div>
    );
  }

  nextSlide(){
    this.setState({slideCount: this.state.slideCount + 1})
  }

  previousSlide(){
    this.setState({slideCount: this.state.slideCount - 1})
  }
}
