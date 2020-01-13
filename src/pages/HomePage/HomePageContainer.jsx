import React, {Component} from 'react';
import {connect} from "react-redux";
import HomePage from "./HomePage";
import {setReviewsRequest, setSkillsRequest} from "../../redux/actions/home";
import {setServicesRequest} from "../../redux/actions/services";
import Page from "../_layout/Page/Page";
import {getReviews, getSkills} from "../../redux/selectors/home";
import {getServices} from "../../redux/selectors/services";


class HomePageContainer extends Component {
  componentDidMount() {
    this.props.setSkillsRequest();
    this.props.setServicesRequest();
    this.props.setReviewsRequest();
  }
  render() {
	const {skills, services, reviews} = this.props;
    return(
	  <Page pageMeta={{
		title: "Разработка сайта в Воронеже - Kondakov.Dev",
		description: 'Бла бла бла'}}>
		<HomePage skills={skills} services={services} reviews={reviews}
		/>
	  </Page>
	)
  }
}
const mapStateToProps = state => {
  return {
	skills:getSkills(state),
	services:getServices(state),
	reviews:getReviews(state)
  }
};
export default connect(mapStateToProps, {setSkillsRequest, setServicesRequest, setReviewsRequest})(HomePageContainer)