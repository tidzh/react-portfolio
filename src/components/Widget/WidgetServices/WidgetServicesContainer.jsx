import React, { Component } from "react";
import WidgetServices from "./WidgetServices";
import {
  getServices,
  getServicesFetching
} from "../../../redux/selectors/services";
import { connect } from "react-redux";
import { setServicesRequest } from "../../../redux/actions/services";
import { ProgressCircular } from "../../common/Progress/Progress";

class WidgetServicesContainer extends Component {
  componentDidMount() {
    this.props.setServicesRequest();
  }

  render() {
    const { services, isFetching } = this.props;
    if (isFetching) return <ProgressCircular />;
    return <WidgetServices services={services} />;
  }
}

const mapStateToProps = state => {
  return {
    services: getServices(state),
    isFetching: getServicesFetching(state)
  };
};
export default connect(mapStateToProps, { setServicesRequest })(
  WidgetServicesContainer
);
