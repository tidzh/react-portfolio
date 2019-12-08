import React from 'react';
import {connect} from "react-redux";
import UserHeaderWidget from "./UserHeaderWidget";
import {logout} from "../../../redux/auth-reducer";
import {UserContext} from "../../../contextApi";

const UserHeaderWidgetContainer = props => {
  
  const logout = (evt) => {
    evt.preventDefault();
    props.logout()
  }
  
  
  return (
    <UserContext.Consumer>
      {
      (userData) => (
        <UserHeaderWidget userData={userData} logout={logout}/>
      )
    }
    </UserContext.Consumer>
  )
}

export default connect(null,{logout})(UserHeaderWidgetContainer)