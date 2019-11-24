import React from 'react';
import AdminAuth from "./AdminAuth";
import {connect} from "react-redux";
import {setAuthUserData} from "../../../redux/auth-reducer";
import axios from "axios";

class AdminAuthContainer extends React.Component{
  componentDidMount() {
	// this.props.setFetching(true)
	axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
	  withCredentials:true
	}).then(response => {
	  const {login, email} = response.data.data
	  this.props.setAuthUserData(login, email);
	});
  }
  render() {
    return (
      <AdminAuth {...this.props}/>
	)
  }
}
const mapStateToProps = state => {
  return {
	email: state.auth.email,
	login: state.auth.login,
	isAuth:state.auth.isAuth
  }
}
export default connect(mapStateToProps, {setAuthUserData})(AdminAuthContainer);