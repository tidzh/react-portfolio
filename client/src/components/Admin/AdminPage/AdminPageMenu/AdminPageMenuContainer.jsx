import React from 'react';
import {addMenuCreator, updateMenuCreator, addMenuItemCreator} from "../../../../redux/menu-reducer";
import AdminPageMenu from "./AdminPageMenu";
import {connect} from "react-redux";




const mapStateToProps = state => {
  return {
	menuData: state.menu.menuList,
	menuDataNew: state.menu.menuNew,
  }
};
const mapStateToDispatch = (dispatch, state) => {
  return {
	addMenu: () => {
	  dispatch(addMenuCreator());
	},
	updateMenu: (name, value, id = false) => {
	  dispatch(updateMenuCreator(name, value, id));
	},
	addMenuItem: () => {
	  dispatch(addMenuItemCreator());
	}
	// updateMenuItem: (idMenu) => {
	//   console.log(state)
	//   this.setState({edit: idMenu});
	// }
  }
}
const AdminPageMenuContainer = connect(mapStateToProps, mapStateToDispatch)(AdminPageMenu);


export default AdminPageMenuContainer;