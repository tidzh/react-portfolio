import React from 'react';
import {connect} from "react-redux";
import Admin from "./Admin";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {UserContext} from "../../helpers/contextApi";
import {setFeedbackCountRequest} from "../../actions/feedback";
import {feedbackCount, getFeedback, getUserAva, getUserEmail, getUserName} from "../../selectors/admin";


class AdminContainer extends React.Component {
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
		<Admin {...this.props}/>
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

// export default withAuthRedirect(connect(mapStateToProps)(AdminContainer), '/auth');
export default compose(
  connect(mapStateToProps, {setFeedbackCountRequest}),
  withAuthRedirect,
)(AdminContainer)