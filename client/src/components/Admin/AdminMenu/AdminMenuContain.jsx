import React from 'react';
import {connect} from "react-redux";
import AdminMenu from "./AdminMenu";

const mapStateToProps = state => {
  return {
	adminSidebar: state.adminPage.adminSidebar
  }
}


const AdminMenuContainer = connect(mapStateToProps)(AdminMenu);

export default AdminMenuContainer;