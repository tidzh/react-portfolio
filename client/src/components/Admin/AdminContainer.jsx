import React from 'react';
import {connect} from "react-redux";
import Admin from "./Admin";
import {Redirect} from "react-router-dom";
import {checkToken} from "../../redux/auth-reducer";

class AdminContainer extends React.Component{
  
  componentDidMount() {
	this.props.checkToken();
  }
  render() {
	if (!this.props.isAuth) return  <Redirect to='/auth' />
    return (
      <Admin {...this.props}/>
	)
  }
}
const mapStateToProps = state => {
  return {
	isAuth:state.auth.isAuth
  }
}
export default connect(mapStateToProps, {checkToken})(AdminContainer);