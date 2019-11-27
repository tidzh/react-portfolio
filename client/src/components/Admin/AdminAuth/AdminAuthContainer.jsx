import React from 'react';
import {connect} from "react-redux";
import AdminAuth from "./AdminAuth";
import {isAuthUser, setAuthUserData, setAuthUserInput} from "../../../redux/auth-reducer";
import axios from "axios";

class AdminAuthContainer extends React.Component{

componentDidMount() {
 axios.get('/api/checkToken').then(res => {
   if (res.status === 200) {
	 this.props.isAuthUser(true);
   } else {
	 const error = new Error(res.error);
	 throw error;
   }
 }).catch(err => {
   console.error(err);
   this.props.isAuthUser(false);
 });
}

onSubmit = evt => {
  evt.preventDefault();
  axios.post(`/api/auth`,
	{email: `${this.props.email}`, password:`${this.props.password}`})
	.then(res => {
	 if(res.status === 200) {
	   this.props.setAuthUserData();
	 } else {
		 const error = new Error(res.error);
		 throw error;
	   }
  }).catch(err => {
	console.error(err);
	console.info('Error logging in please try again');
  });
}
onChange = evt => {
  const name = evt.target.name,
		value = evt.target.value;
  this.props.setAuthUserInput({[name]:value})
}
  render() {
    return(
      <AdminAuth {...this.props} onSubmit={this.onSubmit} onChange={this.onChange}/>
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