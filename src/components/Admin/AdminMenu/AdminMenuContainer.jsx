import React from 'react';
import {connect} from "react-redux";
import AdminMenu from "./AdminMenu";

const mapStateToProps = state => {
  return {
	adminSidebar: state.adminPage.adminSidebar
  }
}


export default connect(mapStateToProps)(AdminMenu);