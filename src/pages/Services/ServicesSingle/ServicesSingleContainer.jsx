import React, {Component} from "react";
import ServicesSingle from "./ServicesSingle";
import {connect} from "react-redux";
import {getServiceSingle, getSidebar} from "../../../redux/selectors/services";
import {setServiceSingleRequest, setServicesRequest} from "../../../redux/actions/services";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import Page from "../../_layout/Page/Page";

class ServicesSingleContainer extends Component {
  componentDidMount() {
	this.props.setServicesRequest();
	this.serviceSingleRequest();
  }
  
  componentDidUpdate(prevProps) {
	if (prevProps.match.params.url !== this.props.match.params.url) {
	  this.serviceSingleRequest();
	}
  }
 
 serviceSingleRequest = () => {
	const url = this.props.match.params.url;
	this.props.setServiceSingleRequest(url);
  };
  
  render() {
	const {sidebar, single} = this.props;
    if(!single) return false;
    
	return (
	  <Page pageMeta={{
		title: `${single.name}`,
		description: 'Бла бла'}}>
		<ServicesSingle sidebar={sidebar} single={single}/>
	  </Page>
	  )
  }
}

const mapStateToProps = state => {
  return {
	sidebar: getSidebar(state),
	single: getServiceSingle(state)
  }
};

export default compose(
  connect(mapStateToProps, {setServicesRequest, setServiceSingleRequest}),
  reduxForm({form: 'service'}))(ServicesSingleContainer)

