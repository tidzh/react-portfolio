import React, {Component} from "react";
import ServicesSingle from "./ServicesSingle";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import {getServiceSingle} from "../../../../redux/selectors/services";
import {setServiceSingleRequest, updateServiceSingleRequest, clearServiceSingle} from "../../../../redux/actions/services";
import Breadcrumbs from "../../../common/Breadcrumbs/Breadcrumbs";

class ServicesSingleContainer extends Component {
  
  componentDidMount() {
	this.props.setServiceSingleRequest(this._getUrl());
  }
  componentWillUnmount() {
	this.props.clearServiceSingle()
  }
  
  _onSubmit = formData => {
	this.props.updateServiceSingleRequest(formData)
  };
  
  _getUrl() {
	return this.props.match.params.url;
  }
  
  render() {
	const {initialValues} = this.props;
	if (!initialValues) return false;
	
	const breadcrumbsConstructor = [
	  {
		'name': 'Все услуги',
		'url': '/admin/services/'
	  },
	  {
		'name': `${this.props.initialValues.name}`,
	  }];
	
	return <ServicesSingle {...this.props}
						   onSubmit={this._onSubmit}
						   breadcrumbs={<Breadcrumbs data={breadcrumbsConstructor} dashboard={true}/>}/>
	
  }
}

const mapStateToProps = state => {
  return {
	initialValues: getServiceSingle(state)
  }
};
export default compose(
  connect(mapStateToProps, {setServiceSingleRequest, updateServiceSingleRequest, clearServiceSingle}),
  reduxForm({form: 'feedbackUpdate', enableReinitialize: true,keepDirtyOnReinitialize: true})
)(ServicesSingleContainer);
