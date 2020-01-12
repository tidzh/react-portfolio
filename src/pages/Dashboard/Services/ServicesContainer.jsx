import React, {Component} from "react";
import Services from "./Services";
import {connect} from "react-redux";
import {setServicesRequest} from "../../../redux/actions/services";
import {getServices} from "../../../redux/selectors/services";

class ServicesContainer extends Component {
  componentDidMount() {
	this.props.setServicesRequest();
  }
  
  render() {
	const {services} = this.props;
    if (services.length === 0) return false;
	return <Services {...this.props}/>
  }
}

const mapStateToProps = state => {
  return {
	services: getServices(state)
  }
};

export default connect(mapStateToProps, {setServicesRequest})(ServicesContainer);