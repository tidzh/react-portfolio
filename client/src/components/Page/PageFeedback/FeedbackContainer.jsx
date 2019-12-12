import React from "react";
import {addFeedback} from "../../../redux/feedback-reducer";
import Feedback from "./Feedback";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";

class FeedbackContainer extends React.Component {
  state = {
    formStatus: false
  }
  
  onSubmit = formData => {
	this.setState({formStatus: !this.state.status})
	this.props.addFeedback(formData.subject, formData.name, formData.email, formData.text);
  }
  
  render() {
	return <Feedback {...this.props} onSubmit={this.onSubmit} formStatus={this.state.formStatus}/>
  }
}



export default compose(
  connect(null, {addFeedback}),
  reduxForm({
	form: 'feedback',
  })
)(FeedbackContainer)