import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './assets/styles/styles.scss'
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import Error404 from "./pages/Error404Page/Error404";
import FeedbackContainer from "./pages/FeedbackPage/FeedbackContainer";
import PortfolioSingleContainer from "./pages/PortfolioSinglePage/PortfolioSingleContainer";
import AdminContainer from "./pages/Dashboard/DashboardContainer";
import AuthContainer from "./components/Auth/AuthContainer";
import PageHomeContainer from "./pages/HomePage/HomePageContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/actions/app";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Box} from "@material-ui/core";
import ServicesSingleContainer from "./pages/ServicesSinglePage/ServicesSingleContainer";

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
		  <Route exact path='/portfolio' component={PortfolioPage}/>
		  <Route path='/portfolio/:url.html' component={PortfolioSingleContainer}/>
		  <Route path='/feedback' component={FeedbackContainer}/>
		  <Route path='/services/:url.html' component={ServicesSingleContainer}/>
		  <Route path='/auth/' component={AuthContainer}/>
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
