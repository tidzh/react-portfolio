import React from 'react';
import {connect} from "react-redux";
import MenuDashboard from "./MenuDashboard";

const mapStateToProps = state => {
  return {
	adminSidebar: state.adminPage.adminSidebar
  }
};

const MenuContainer = props => {
  
  const {isOpen, handleDrawerClose, adminSidebar} = props;
  
  return <MenuDashboard isOpen={isOpen}
						handleDrawerClose={handleDrawerClose}
						adminSidebar={adminSidebar}/>
};

export default connect(mapStateToProps)(MenuContainer);