import React, {Component} from 'react';
import {connect} from "react-redux";
import Dashboard from "./Dashboard";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {UserContext} from "../../helpers/contextApi";
import {setFeedbackCountRequest} from "../../actions/feedback";
import {feedbackCount, getFeedback, getUserAva, getUserEmail, getUserName} from "../../selectors/admin";


class DashboardContainer extends Component {
  componentDidMount() {
    this.props.setFeedbackCountRequest();
  }
  
  render() {
	return (
	  <UserContext.Provider value={(
		{
		  userEmail: this.props.userEmail,
		  userName: this.props.userName,
		  userAva: this.props.userAva,
		  feedbackCount: this.feedbackCount,
		}
	  )}>
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