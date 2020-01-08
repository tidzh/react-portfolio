import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './assets/styles/styles.scss'
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Error404 from "./components/Helpers/Error/Error404/Error404";
import FeedbackContainer from "./components/Pages/Feedback/FeedbackContainer";
import PortfolioSingleContainer from "./components/Portfolio/PortfolioSingle/PortfolioSingleContainer";
import AdminContainer from "./components/Dashboard/DashboardContainer";
import AdminAuthContainer from "./components/Auth/AuthContainer";
import PageHomeContainer from "./components/Pages/Home/PageHomeContainer";
import {connect} from "react-redux";
import {initializeApp} from "./actions/app";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Box} from "@material-ui/core";
import ServicesSingleContainer from "./components/Pages/Services/ServicesSingle/ServicesSingleContainer";

class App extends Component {
  componentDidMount() {
	this.props.initializeApp();
  }
  
  render() {
	if (!this.props.initialize) {
	  return (
		<Box display="flex" justifyContent="center">
		  <CircularProgress size={70}/>
		</Box>
	  )
	}
	return (
	  <Router>
		<Switch>
		  <Route exact path='/' component={PageHomeContainer}/>
		  <Route exact path='/portfolio' component={Portfolio}/>
		  <Route path='/portfolio/:url.html' component={PortfolioSingleContainer}/>
		  <Route path='/feedback' component={FeedbackContainer}/>
		  <Route path='/services/:url.html' component={ServicesSingleContainer}/>
		  <Route path='/auth/' component={AdminAuthContainer}/>
		  <Route path='/admin' component={AdminContainer}/>
		  <Route path='*' component={Error404}/>
		</Switch>
	  </Router>
	)
  }
}

const mapStateToProps = state => {
  return {
	initialize: state.app.initialize
  }
};

export default connect(mapStateToProps, {initializeApp})(App);
