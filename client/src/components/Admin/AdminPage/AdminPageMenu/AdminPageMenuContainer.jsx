import React from 'react';
import {addMenuCreator, updateMenuCreator, addMenuItemCreator} from "../../../../redux/menu-reducer";
import AdminPageMenu from "./AdminPageMenu";
import {connect} from "react-redux";


// class AdminPageMenuContainer extends React.Component {
//   state = {edit: false}
//
//   handleSubmit = () => this.props.store.dispatch(addMenuCreator());
//   handleSubmitItem = () => this.setState({edit: false})
//
//   handleInputChange = (name, value, id = false, targetId) => {
// 	if(targetId ==='name-new' || targetId ==='url-new') {
// 	  this.setState({edit:false})
// 	}
// 	this.props.store.dispatch(updateMenuCreator(name, value, id));
//   }
//   handleEditMenuItem = idMenu => this.setState({edit: idMenu});
//
//
//   render() {
// 	const {store} = this.props
// 	let state = store.getState();
// 	return (
// 	  <AdminPageMenu menuData={state.menu.menuList}
// 					 menuDataNew={state.menu.menuNew}
// 					 addMenu={this.handleSubmit}
// 					 addMenuItem={this.handleSubmitItem}
// 					 updateMenu={this.handleInputChange}
// 					 updateMenuItem={this.handleEditMenuItem}
// 					 isOpen={this.state.edit}/>
// 	)
//   }
// }
//
// export default AdminPageMenuContainer;



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