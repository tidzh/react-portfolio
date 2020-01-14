import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {fetchMenuRequest} from "../../../redux/actions/menu";
import {getMenu} from "../../../redux/selectors/header";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.fetchMenuRequest()
  }
  render() {
    const {menuData} = this.props;
    if(menuData.length === 0) return false;
    return <Header menuData={menuData}/>
  }
}

const mapStateToProps = state => {
  return {
    menuData: getMenu(state)
  }
};

export default connect(mapStateToProps, {fetchMenuRequest})(HeaderContainer);