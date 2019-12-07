import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setMenuThunk} from "../../redux/menu-reducer";

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    }
  }
  componentDidMount() {
    this.props.setMenuThunk()
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

export default connect(mapStateToProps, {setMenuThunk})(HeaderContainer);