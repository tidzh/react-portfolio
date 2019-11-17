import {connect} from "react-redux";
import Services from "./Services";

const mapStateToProps = state => {
  return {
	servicesData: state.servicePage.services
  }
}

const ServicesContainer = connect(mapStateToProps)(Services);
export default ServicesContainer;