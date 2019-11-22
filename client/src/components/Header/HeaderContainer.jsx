import Header from "./Header";
import {connect} from "react-redux";
import {setMenu, updateMenuStatus} from "../../redux/menu-reducer";
import React from "react";
import axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('api/menu').then(response => {
      this.props.setMenu(response.data)
    })
  }
  
  burgerState = () => this.props.setMenuStatus();
  render() {
    return(
      <Header
        menuData={this.props.menuData}
        isOpen={this.props.isOpen}
        burgerState={this.burgerState}
      />
    )
  }
}



const mapStateToProps = (state) => {
  return{
    menuData: state.menu.menuList,
    isOpen: state.menu.isOpen
  }
}
const mapDispatchToProps = dispatch => {
  return{
    setMenu: (menu) => {
      dispatch(setMenu(menu));
    },
    setMenuStatus: () => {
      dispatch(updateMenuStatus());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);