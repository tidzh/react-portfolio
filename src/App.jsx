import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import style from './assets/styles/styles.scss'
import LayoutFront from "./pages/_layout/LayoutFront/LayoutFront";
import Portfolio from "./pages/portfolio/Portfolio";
import Error404 from "./components/Error/Error404/Error404";
import ServicesContainer from "./components/Services/ServicesContainer";
import FeedbackContainer from "./pages/feedback/FeedbackContainer";
import PortfolioSingleContainer from "./components/Portfolio/PortfolioSingle/PortfolioSingleContainer";
import AdminContainer from "./components/Admin/AdminContainer";
import AdminAuthContainer from "./components/Auth/AuthContainer";
import PageHomeContainer from "./pages/home/PageHomeContainer";


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
