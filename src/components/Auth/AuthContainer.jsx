import React from 'react';
import {connect} from "react-redux";
import Auth from "./Auth";
import {checkToken, authUser} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {reduxForm} from "redux-form";


class AuthContainer extends React.Component {
  
  onSubmit = formData => {
	this.props.authUser(formData.email, formData.password);
  }
  render() {
	if (this.props.isAuth) return <Redirect to='/admin'/>
	return (
	  <Auth {...this.props} onSubmit={this.onSubmit}/>
	)
  }
}

const mapStateToProps = state => {
  return {
	email: state.auth.email,
	password: state.auth.password,
	isAuth: state.auth.isAuth,
  }
}


export default compose(
  connect(mapStateToProps, {checkToken, authUser}),
  reduxForm({
	form: 'auth',
  }),
)(AuthContainer)