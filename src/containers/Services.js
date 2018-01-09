import React, {Component} from 'react';
import './Services.css';
export default class Services extends Component{
  render(){
    return(
      <div className="listofServices">
        <ul className="lists"><h3>We provide the following list of services to serve you. We promise you that our work will satisfy you.<br/> Here are the following work types that we do.</h3>
          <li>As we all know, that we do a lot of landscape photography as a part of our photography events.<br/>
          we travel across the globe to find the great location and great moment of time to capture the beautiful events to tell the world.<br/>
          We have been fortunate enought to be treated good by the mother nature. Please <a href="/Landscape">click here</a> to know more about our Landscape photography. </li>&nbsp;
          <li>Similar to our Landscapes, we have also been known for our extremely appealing travel photography. You all must be thinking what is the difference between Landscape and travel photography right ? Well,
          we capture the unseen moments while traveling to different locations to experience the greatness of each place. Please <a href="/Travel">click here</a> to know more about our Travel photography.
          </li>&nbsp;
          <li>Hey, not only travel and landscape! we even do Product photography. You must be wondering what kind of Products we shoot. Well, Any product.
          All you need to do is reach out to us and let us know about the product. And we will get back to you with great product shoots and images in your hand.
          to know more about Product Photography, please <a href="/Product">click here</a>.</li>&nbsp;
        </ul>
      </div>
    )
  }
}
