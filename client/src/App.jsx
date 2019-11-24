import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import LayoutFront from "./components/Layout/LayoutFront/LayoutFront";
import Home from "./components/Page/PageHome/Home";
import Portfolio from "./components/Page/PagePortfolio/Portfolio";
import Error404 from "./components/Error/Error404";
import ServicesContainer from "./components/Services/ServicesContainer";
import AdminAuth from './components/Admin/AdminAuth/AdminAuth'
import Admin from "./components/Admin/Admin";
import FeedbackContainer from "./components/Page/PageFeedback/FeedbackContainer";
import PortfolioSingleContainer from "./components/Portfolio/PortfolioSingle/PortfolioSingleContainer";
import LayoutAdmin from "./components/Layout/LayoutAdmin/LayoutAdmin";


const App = () => {
return (
  <>
  <Router>
      <Switch>
        <Route exact path='/'>
          <LayoutFront><Home/></LayoutFront>
        </Route>
        <Route exact path='/portfolio'>
          <LayoutFront><Portfolio/></LayoutFront>
        </Route>
        <Route path='/portfolio/:url.html'>
          <LayoutFront><PortfolioSingleContainer/></LayoutFront>
        </Route>
        <Route path='/feedback'>
          <LayoutFront><FeedbackContainer/></LayoutFront>
        </Route>
        <Route path='/services'>
          <LayoutFront><ServicesContainer/></LayoutFront>
        </Route>
        <Route path='/admin'>
          <LayoutAdmin><Admin/></LayoutAdmin>
        </Route>
        <Route path='*'>
          <LayoutFront><Error404/></LayoutFront>
        </Route>
      </Switch>
  </Router>
  </>
)
}

export default App;
