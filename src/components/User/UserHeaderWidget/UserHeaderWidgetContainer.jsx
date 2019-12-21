import React from 'react';
import {connect} from "react-redux";
import UserHeaderWidget from "./UserHeaderWidget";
import {logout} from "../../../reducers/auth";
import {UserContext} from "../../../helpers/contextApi";
import {compose} from "redux";

const UserHeaderWidgetContainer = props => {
  
  console.log(props)
  
  
  const logout = (evt) => {
    evt.preventDefault();
    props.logout()
  }
  
  
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