import React from "react";
import Feedback from "./Feedback";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import {addFeedbackRequest} from "../../../actions/feedback";
import Page from "../../layout/Page/Page";

class FeedbackContainer extends React.Component {
  state = {
	formLoading: false
  };
  
  onSubmit = formData => {
	this.setState({formLoading: true})
	this.props.addFeedbackRequest(formData.subject, formData.name, formData.email, formData.text);
	// this.setState({formLoading: false})
  };
  
  render() {
	return (
	  <Page pageMeta={{
		title: "Обратная связь",
		description: 'Бла бла бла'
	  }}>
		<Feedback {...this.props} onSubmit={this.onSubmit} formLoading={this.state.formLoading}/>
	  </Page>
	)
  }
}


export default compose(
  connect(null, {addFeedbackRequest}),
  reduxForm({form: 'feedback'})
)(FeedbackContainer)