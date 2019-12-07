import React from 'react';
import {connect} from "react-redux";
import Admin from "./Admin";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class AdminContainer extends React.Component{
  
  render() {
    return (
      <Admin {...this.props}/>
	)
  }
}
const mapStateToProps = (state) => {
  return {
  }
}


// export default withAuthRedirect(connect(mapStateToProps)(AdminContainer), '/auth');
export  default compose(
  connect(mapStateToProps),
  withAuthRedirect,
)(AdminContainer)