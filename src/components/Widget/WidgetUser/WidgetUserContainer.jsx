import React from 'react';
import {connect} from "react-redux";
import WidgetUser from "./WidgetUser";
import {UserContext} from "../../../utils/contextApi";
import {logout} from "../../../redux/actions/auth";

const WidgetUserContainer = props => {
  
  const logout = evt => {
	evt.preventDefault();
	props.logout();
  };
  
  return (
	<UserContext.Consumer>
	  {
		(userData) => (
		  <WidgetUser {...props} userData={userData} logout={logout}/>
		)
	  }
	</UserContext.Consumer>
  )
};

export default connect(null, {logout})(WidgetUserContainer)