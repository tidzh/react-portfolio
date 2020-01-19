import React, {Component} from "react";
import FeedbackPage from "./FeedbackPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import {addFeedbackRequest} from "../../redux/actions/feedback";
import Page from "../_layout/Page/Page";

class FeedbackContainer extends Component {
  state = {
	formLoading: false
  };
  
  onSubmit = formData => {
	this.setState({formLoading: true})
	this.props.addFeedbackRequest(formData);
  };
  
  render() {
	return (
	  <Page pageMeta={{
		title: "Обратная связь",
		description: 'Бла бла бла'
	  }}>
		<FeedbackPage {...this.props} onSubmit={this.onSubmit} formLoading={this.state.formLoading}/>
	  </Page>
	)
  }
}


export default compose(
  connect(null, {addFeedbackRequest}),
  reduxForm({form: 'feedback'})
)(FeedbackContainer)