import React, {Component} from 'react';

const LeftArrow = (props) => {
  return (
    <div onClick={this.previousSlide} className="backArrow">
    <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>

  )
}

export default LeftArrow;
