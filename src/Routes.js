import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './containers/Home';
import Order from './containers/Order';
import About from './containers/About';
import Landscape from './containers/Landscape';
import Travel from './containers/Travel';
import Product from './containers/Product';
import More from './containers/More';
import Services from './containers/Services';

export default() =>
<Switch>
  <Route path="/" exact component={Home}/>
  <Route path="/Order" exact component={Order}/>
  <Route path="/Services" exact component={Services}/>
  <Route path="/About" exact component={About}/>
  <Route path="/Landscape" exact component={Landscape}/>
  <Route path="/Travel" exact component={Travel}/>
  <Route path="/Product" exact component={Product}/>
  <Route path="/More" component={More}/>
</Switch>;
