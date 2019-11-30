import React from 'react';
import {connect} from "react-redux";
import AdminAuth from "./AdminAuth";
import {isAuthUser, setAuthUserData, setAuthUserInput} from "../../../redux/auth-reducer";
import axios from "axios";
import {loginAPI} from "../../../api/api";

class AdminAuthContainer extends React.Component{
state = {
  error:false
}

componentDidMount() {
  loginAPI.checkToken().then(status => {
   if (status === 200) {
	 this.props.isAuthUser(true);
   }
 }).catch(err => {
   console.error(err);
   this.props.isAuthUser(false);
 });
}

onSubmit = evt => {
  evt.preventDefault();
  loginAPI.checkLogin(this.props.email,this.props.password)
	.then(status => {
	 if(status === 200) {
	   this.props.setAuthUserData();
	 } else {
		 const error = new Error(status.error);
		 throw error;
	   }
  }).catch(err => {
	console.error(err);
	this.setState({error:true})
  });
}
onChange = evt => {
  const name = evt.target.name,
		value = evt.target.value;
  this.props.setAuthUserInput({[name]:value})
}
  render() {
    return(
      <AdminAuth {...this.props} error={this.state.error} onSubmit={this.onSubmit} onChange={this.onChange}/>
	)
  }
}
const mapStateToProps = state => {
  return {
	email: state.auth.email,
	password: state.auth.password,
  }
}
export default connect(mapStateToProps, {setAuthUserData, setAuthUserInput, isAuthUser})(AdminAuthContainer)