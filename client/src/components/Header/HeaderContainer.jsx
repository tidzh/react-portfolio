import Header from "./Header";
import {connect} from "react-redux";
import {setMenu, updateMenuStatus} from "../../redux/menu-reducer";
import React from "react";
import axios from "axios";

class HeaderContainer extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      isOpen: true
    }
}
  componentDidMount() {
    axios.get('/api/menu').then(response => {
      this.props.setMenu(response.data)
    })
  }
  
  burgerState = () => this.setState({isOpen: !this.state.isOpen});
  render() {
    return(
      <Header
        menuData={this.props.menuData}
        isOpen={this.state.isOpen}
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);