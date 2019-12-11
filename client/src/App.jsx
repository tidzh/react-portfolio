import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import LayoutFront from "./components/Layout/LayoutFront/LayoutFront";
import Portfolio from "./components/Page/PagePortfolio/Portfolio";
import Error404 from "./components/Error/Error404/Error404";
import ServicesContainer from "./components/Services/ServicesContainer";
import FeedbackContainer from "./components/Page/PageFeedback/FeedbackContainer";
import PortfolioSingleContainer from "./components/Portfolio/PortfolioSingle/PortfolioSingleContainer";
import AdminContainer from "./components/Admin/AdminContainer";
import AdminAuthContainer from "./components/Auth/AuthContainer";
import PageHomeContainer from "./components/Page/PageHome/PageHomeContainer";


const App = () => {
return (
  <Router>
      <Switch>
        <Route exact path='/'>
          <LayoutFront><PageHomeContainer/></LayoutFront>
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
        <Route path='/auth/' component={AdminAuthContainer}/>
        <Route path='/admin' component={AdminContainer}/>
        <Route path='*'>
          <LayoutFront><Error404/></LayoutFront>
        </Route>
      </Switch>
  </Router>
)
}

export default App;
