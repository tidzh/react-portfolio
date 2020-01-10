import React, {Component} from 'react';
import {connect} from "react-redux";
import PageHome from "./PageHome";
import {setSkillsRequest} from "../../redux/actions/home";
import {setServicesRequest} from "../../redux/actions/services";
import Page from "../_layout/Page/Page";
import {getSkills} from "../../redux/selectors/home";
import {getServices} from "../../redux/selectors/services";


class PageHomeContainer extends Component {
  componentDidMount() {
    this.props.setSkillsRequest();
    this.props.setServicesRequest();
  }
  render() {
    return(
	  <Page pageMeta={{
		title: "Разработка сайта в Воронеже - Kondakov.Dev",
		description: 'Бла бла бла'}}>
		<PageHome skills={this.props.skills} services={this.props.services}/>
	  </Page>
	)
  }
}
const mapStateToProps = state => {
  return {
	skills:getSkills(state),
	services:getServices(state)
  }
};
export default connect(mapStateToProps, {setSkillsRequest, setServicesRequest})(PageHomeContainer)