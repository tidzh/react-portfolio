import React, {Component} from 'react';
import {connect} from "react-redux";
import HomePage from "./HomePage";
import {setReviewsRequest} from "../../redux/actions/widgets";
import {setServicesRequest} from "../../redux/actions/services";
import Page from "../_layout/Page/Page";
import {getServices} from "../../redux/selectors/services";
import {getReviews} from "../../redux/selectors/widget";


class HomePageContainer extends Component {
  componentDidMount() {
    this.props.setServicesRequest();
    this.props.setReviewsRequest();
  }
  render() {
	const {services, reviews} = this.props;
    return(
	  <Page pageMeta={{
		title: "Разработка сайта в Воронеже - Kondakov.Dev",
		description: 'Бла бла бла'}}>
		<HomePage services={services} reviews={reviews}
		/>
	  </Page>
	)
  }
}
const mapStateToProps = state => {
  return {
	services:getServices(state),
	reviews:getReviews(state)
  }
};
export default connect(mapStateToProps, {setServicesRequest, setReviewsRequest})(HomePageContainer)