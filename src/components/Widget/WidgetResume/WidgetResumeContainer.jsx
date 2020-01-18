import React, {Component} from "react";
import WidgetResume from "./WidgetResume";
import {connect} from "react-redux";
import {getSkills, getSkillsFetching} from "../../../redux/selectors/widget";
import {setSkillsRequest} from "../../../redux/actions/widgets";
import {ProgressCircular} from "../../common/Progress/Progress";


class WidgetResumeContainer extends Component {
  componentDidMount() {
	this.props.setSkillsRequest();
  }
  
  render() {
    const {skills, isFetching} = this.props;
    if(isFetching) return <ProgressCircular/>;
	return <WidgetResume skills={skills}/>
  }
}

const mapStateToProps = state => {
  return {
	skills: getSkills(state),
	isFetching: getSkillsFetching(state)
  }
};
export default connect(mapStateToProps, {setSkillsRequest})(WidgetResumeContainer);