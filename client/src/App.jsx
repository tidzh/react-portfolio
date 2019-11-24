import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import LayoutFront from "./components/Layout/LayoutFront/LayoutFront";
import LayoutAdmin from "./components/Layout/LayoutAdmin/LayoutAdmin"
import HeaderContainer from "./components/Header/HeaderContainer";
import Footer from './components/Footer/Footer';

import Home from "./components/Page/PageHome/Home";
import Portfolio from "./components/Page/PagePortfolio/Portfolio";
// import Error404 from "./components/Error/Error404";
import ServicesContainer from "./components/Services/ServicesContainer";
import PageLogin from './components/Page/PageLogin/PageLogin'
import Admin from "./components/Admin/Admin";
import AdminPageMenuContainer from "./components/Admin/AdminPage/AdminPageMenu/AdminPageMenuContainer";
import AdminPagePortfolioContainer from "./components/Admin/AdminPage/AdminPagePortfolio/AdminPagePortfolioContainer";
import FeedbackContainer from "./components/Page/PageFeedback/FeedbackContainer";
import PortfolioSingle from "./components/Portfolio/PortfolioSingle/PortfolioSingle";
import PortfolioSingleContainer from "./components/Portfolio/PortfolioSingle/PortfolioSingleContainer";


const App = () => {
    return (
      <React.Fragment>
      <Router>
          <HeaderContainer/>
        <LayoutFront>
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route path='/portfolio/:url.html' component={PortfolioSingleContainer} />
          <Route path='/feedback' component={FeedbackContainer}/>
          <Route path='/services' component={ServicesContainer}/>
          <Route path='/login' component={PageLogin}/>
          </Switch>
        </LayoutFront>
        <Route path='/admin/'>
          <LayoutAdmin>
            <Switch>
              <Route exact path='/admin' component={Admin}/>
              <Route path='/admin/menu' component={AdminPageMenuContainer}/>
              <Route path='/admin/portfolio' component={AdminPagePortfolioContainer}/>
            </Switch>
          </LayoutAdmin>
        </Route>
      </Router>
        <Footer/>
      </React.Fragment>
    )
}

export default App;
