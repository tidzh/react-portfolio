import React from 'react';
import {connect} from "react-redux";
import AdminAuth from "./AdminAuth";
import {checkToken, authUser, setAuthUserInput} from "../../../redux/auth-reducer";


class AdminAuthContainer extends React.Component {
  state = {
	error: false
  }
  
  componentDidMount() {
	this.props.checkToken();
  }
  
  onSubmit = evt => {
	evt.preventDefault();
	this.props.authUser(this.props.email, this.props.password);

  }
  onChange = evt => {
	  this.props.setAuthUserInput({[evt.target.name]: evt.target.value})
	// if (this.state.error === false) {
	//   this.setState({error: true})
	// }
  }
  
  render() {
	return (
	  <AdminAuth {...this.props} error={this.state.error} onSubmit={this.onSubmit} onChange={this.onChange}/>
	)
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
	email: state.auth.email,
	password: state.auth.password,
  }
}
export default connect(mapStateToProps, {checkToken, authUser, setAuthUserInput})(AdminAuthContainer)