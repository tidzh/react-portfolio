import React from 'react';
import {connect} from "react-redux";
import UserHeaderWidget from "./UserHeaderWidget";
import {UserContext} from "../../../helpers/contextApi";
import {logout} from "../../../actions/auth";

const UserHeaderWidgetContainer = props => {
  
  const logout = (evt) => {
    evt.preventDefault();
    props.logout()
  };
  
  
  return (
    <UserContext.Consumer>
      {
      (userData) => (
        <UserHeaderWidget {...props} userData={userData} logout={logout}/>
      )
    }
    </UserContext.Consumer>
  )
}


export default connect(null,{logout})(UserHeaderWidgetContainer)