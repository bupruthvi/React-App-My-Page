import React, {Component} from 'react';
import './More.css';

export default class More extends Component{
  render(){
    return(
      <div className="moreInfo">
        <p>For more information, please visit 'About' in our page.
        This page is still under development and we are really sorry for the inconvinence caused.
        Please visit our facebook page as well.<br/>
        <a target="_blank" href="https://www.facebook.com/BrockoPhotography/" rel="noopener noreferrer">Brocko Photography</a></p>
      </div>
    );
  }
}
