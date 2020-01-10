import React from 'react';
import {connect} from "react-redux";
import Menu from "./Menu";

const mapStateToProps = state => {
  return {
	adminSidebar: state.adminPage.adminSidebar
  }
};

const MenuContainer = props => {
  
  const {isOpen, handleDrawerClose, adminSidebar} = props;
  
  return <Menu isOpen={isOpen}
			   handleDrawerClose={handleDrawerClose}
			   adminSidebar={adminSidebar}/>
};

export default connect(mapStateToProps)(MenuContainer);