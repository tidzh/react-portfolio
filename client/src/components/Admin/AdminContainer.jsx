import React from 'react';
import {connect} from "react-redux";
import Admin from "./Admin";

class AdminContainer extends React.Component{
  render() {
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
export default connect(mapStateToProps)(AdminContainer);