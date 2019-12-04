import React from 'react';
import {connect} from "react-redux";
import UserHeaderWidget from "./UserHeaderWidget";
import {logout} from "../../../redux/auth-reducer";

const UserHeaderWidgetContainer = (props) => {
  
  const logout = (evt) => {
    evt.preventDefault();
    props.logout()
  }
  
   return <UserHeaderWidget logout={logout}/>
}


export default connect(null,{logout})(UserHeaderWidgetContainer)