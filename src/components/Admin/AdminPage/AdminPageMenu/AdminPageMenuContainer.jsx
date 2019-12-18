import React from 'react';
import {updateMenu, addMenuItem, setMenuThunk, addMenuThunk} from "../../../../redux/menu-reducer";
import AdminPageMenu from "./AdminPageMenu";
import {connect} from "react-redux";
import {compose} from "redux";


class AdminPageMenuContainer extends React.Component {
  
  componentDidMount() {
	this.props.setMenuThunk();
  }
  render() {
	if(!this.props.menuData) {
	  return false
	}
	return (
	  <AdminPageMenu {...this.props}/>
	)
  }
}

const mapStateToProps = state => {
  return {
	menuData: state.menu.menuList,
	menuDataNew: state.menu.menuNew
  }
};


export default compose(
  connect(mapStateToProps, {addMenuThunk, addMenuItem, updateMenu, setMenuThunk})
)(AdminPageMenuContainer)