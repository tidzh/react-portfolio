import React from 'react';
import {connect} from "react-redux";
import AdminAuth from "./AdminAuth";
import {checkToken, authUser, setAuthUserInput} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


class AdminAuthContainer extends React.Component {
  state = {
	error: false
  }
  
  componentDidMount() {
	this.props.checkToken();
  }
  validationUserData = () => {
	this.setState({error: true})
  }
  onSubmit = evt => {
	evt.preventDefault();
	this.props.authUser(this.props.email, this.props.password, this.validationUserData);
  }
  onChange = evt => {
	this.props.setAuthUserInput({[evt.target.name]: evt.target.value})
  }
  
  render() {
	if (this.props.isAuth) return  <Redirect to='/admin' />
	return (
	  <AdminAuth {...this.props} error={this.state.error} onSubmit={this.onSubmit} onChange={this.onChange}/>
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
export default connect(mapStateToProps, {checkToken, authUser, setAuthUserInput})(AdminAuthContainer)