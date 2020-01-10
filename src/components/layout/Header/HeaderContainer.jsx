import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {fetchMenuRequest} from "../../../actions/menu";
import {getMenu} from "../../../selectors/header";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.fetchMenuRequest()
  }
  render() {
    return(
      <Header menuData={this.props.menuData}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuData: getMenu(state)
  }
};

export default connect(mapStateToProps, {fetchMenuRequest})(HeaderContainer);