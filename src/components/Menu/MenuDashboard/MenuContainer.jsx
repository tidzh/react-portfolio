import React from 'react';
import {connect} from "react-redux";
import MenuDashboard from "./MenuDashboard";

const mapStateToProps = state => {
  return {
	adminSidebar: state.adminPage.adminSidebar
  }
};

const MenuContainer = ({isOpen, handleDrawerClose, adminSidebar}) => {
  
  return <MenuDashboard isOpen={isOpen}
						handleDrawerClose={handleDrawerClose}
						adminSidebar={adminSidebar}/>
};

export default connect(mapStateToProps)(MenuContainer);