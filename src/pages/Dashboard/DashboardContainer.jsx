import React, {Component} from 'react';
import {connect} from "react-redux";
import Dashboard from "./Dashboard";
import {withAuthRedirect} from "../../utils/hoc/withAuthRedirect";
import {compose} from "redux";
import {UserContext} from "../../utils/contextApi";
import {setFeedbackCountRequest} from "../../redux/actions/feedback";
import {feedbackCount, getFeedback, getUserAva, getUserEmail, getUserName} from "../../redux/selectors/admin";


class DashboardContainer extends Component {
  componentDidMount() {
	this.props.setFeedbackCountRequest();
  }
  
  render() {
	const {userEmail, userName, userAva, feedbackCount} = this.props;
	return (
	  <UserContext.Provider value={({userEmail, userName, userAva, feedbackCount})}>
		<Dashboard {...this.props}/>
	  </UserContext.Provider>
	)
  }
}

const mapStateToProps = state => {
  return {
	userName: getUserName(state),
	userEmail: getUserEmail(state),
	userAva: getUserAva(state),
	feedback: getFeedback(state),
	feedbackCount: feedbackCount(state),
  }
};

// export default withAuthRedirect(connect(mapStateToProps)(DashboardContainer), '/auth');
export default compose(
  connect(mapStateToProps, {setFeedbackCountRequest}),
  withAuthRedirect
)(DashboardContainer)