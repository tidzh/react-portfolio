import React from 'react';
import AdminPageMenu from "./AdminPageMenu";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import {deleteMenuRequest, fetchMenuRequest, sendMenuRequest} from "../../../../actions/menu";


class AdminPageMenuContainer extends React.Component {
  
  componentDidMount() {
	this.props.fetchMenuRequest();
  }
  
  onSubmit = formData => {
    this.props.sendMenuRequest(formData.name, formData.url);
  };
  handlerDelete = id => {
    this.props.deleteMenuRequest(id)
  };
  
  render() {
	return (
	  <AdminPageMenu {...this.props} onSubmit={this.onSubmit} handlerDelete={this.handlerDelete}/>
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
  connect(mapStateToProps, {fetchMenuRequest, sendMenuRequest, deleteMenuRequest}),
  reduxForm({form: 'add-menu'})
)(AdminPageMenuContainer)