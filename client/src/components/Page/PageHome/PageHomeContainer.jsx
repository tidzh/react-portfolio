import React from 'react';
import {connect} from "react-redux";
import PageHome from "./PageHome";
import {getSkills} from "../../../redux/home-reducer";
import {setServices} from "../../../redux/services-reducer";


class PageHomeContainer extends React.Component {
  componentDidMount() {
    this.props.getSkills();
    this.props.setServices();
  }
  render() {
    return(
      <PageHome skills={this.props.skills} services={this.props.services}/>
	)
  }
}
const mapStateToProps = state => {
  return {
	skills:state.home.skills,
	services:state.services.services
  }
}
export default connect(mapStateToProps, {getSkills, setServices})(PageHomeContainer)