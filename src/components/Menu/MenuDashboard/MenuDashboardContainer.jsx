import React from "react";
import { connect } from "react-redux";
import MenuDashboard from "./MenuDashboard";

const mapStateToProps = state => {
  return {
    adminSidebar: state.dashboard.adminSidebar
  };
};

const MenuDashboardContainer = ({
  isOpen,
  handleDrawerClose,
  adminSidebar
}) => {
  return (
    <MenuDashboard
      isOpen={isOpen}
      handleDrawerClose={handleDrawerClose}
      adminSidebar={adminSidebar}
    />
  );
};

export default connect(mapStateToProps)(MenuDashboardContainer);
