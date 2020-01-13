import React from 'react';
import PageMenu from "./PageMenu";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import {deleteMenuRequest, fetchMenuRequest, sendMenuRequest} from "../../../redux/actions/menu";


class PageMenuContainer extends React.Component {
  
  componentDidMount() {
	this.props.fetchMenuRequest();
  }
  
  onSubmit = formData => {
    this.props.sendMenuRequest(formData);
  };
  handlerDelete = id => {
    this.props.deleteMenuRequest(id)
  };
  
  render() {
	return (
	  <PageMenu {...this.props} onSubmit={this.onSubmit} handlerDelete={this.handlerDelete}/>
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
)(PageMenuContainer)