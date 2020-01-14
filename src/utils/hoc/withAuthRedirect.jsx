import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
// import {checkToken} from "../actions/auth";

const mapStateToPropsForRedirect = state => {
  return {
	isAuth: state.auth.isAuth,
  }
};

export const withAuthRedirect = (Component, url = '/auth') => {
  class RedirectComponent extends React.Component {
	// componentDidMount() {
	// this.props.checkToken();
	// }
	render() {
	  if (!this.props.isAuth && this.props.isAuth !== undefined) return <Redirect to={`${url}`}/>
	  return <Component {...this.props}/>
	}
  }
  
  return connect(mapStateToPropsForRedirect)(RedirectComponent)
};
