import React from 'react';
import {connect} from "react-redux";
import AdminMenu from "./AdminMenu";

const mapStateToProps = state => {
  return {
	adminSidebar: state.adminPage.adminSidebar
  }
};

const AdminMenuContainer = props => {
  
  const {isOpen, handleDrawerClose, adminSidebar} = props;
  
  return <AdminMenu isOpen={isOpen}
					handleDrawerClose={handleDrawerClose}
					adminSidebar={adminSidebar}/>
};

export default connect(mapStateToProps)(AdminMenuContainer);