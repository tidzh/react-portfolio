import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AUTH} from "../../constants/routes";
import {getIsAuth} from "../../redux/selectors/auth";

const mapStateToPropsForRedirect = state => {
  return {
	isAuth: getIsAuth(state),
  }
};

export const withAuthRedirect = (Component, url = `${AUTH}`) => {
  class RedirectComponent extends React.Component {
	render() {
	  const {isAuth} = this.props;
	  if (!isAuth && isAuth !== undefined) return <Redirect to={`${url}`}/>
	  return <Component {...this.props}/>
	}
  }
  
  return connect(mapStateToPropsForRedirect)(RedirectComponent)
};

