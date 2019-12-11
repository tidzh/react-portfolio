import React from 'react';
import {connect} from "react-redux";
import Auth from "./Auth";
import {checkToken, authUser, setAuthUserInput} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import {maxLengthCreator} from "../../helpers/validators";


class AuthContainer extends React.Component {
  state = {
	error: false
  }
  
  validationUserData = () => {
	this.setState({error: true})
  }
  onSubmit = formData => {
	this.props.authUser(formData.email, formData.password, this.validationUserData);
  }
  onChange = evt => {
	this.props.setAuthUserInput({[evt.target.name]: evt.target.value})
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
  connect(mapStateToProps, {checkToken, authUser, setAuthUserInput}),
  reduxForm({
	form: 'auth',
  }),
)(AuthContainer)