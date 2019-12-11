import React from 'react';
import {connect} from "react-redux";
import Admin from "./Admin";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {UserContext} from "../../contextApi";


class AdminContainer extends React.Component{
  
  
  render() {
    return (
      <UserContext.Provider value={(
        {userEmail: this.props.userEmail,
        userName:this.props.userName,
        userAva:this.props.userAva}
        )}>
        <Admin {...this.props}/>
      </UserContext.Provider>
	)
  }
}
const mapStateToProps = state => {
  return {
    userName:state.auth.name,
    userEmail:state.auth.email,
    userAva:state.auth.ava,
  }
}

// export default withAuthRedirect(connect(mapStateToProps)(AdminContainer), '/auth');
export  default compose(
  connect(mapStateToProps),
  withAuthRedirect,
)(AdminContainer)