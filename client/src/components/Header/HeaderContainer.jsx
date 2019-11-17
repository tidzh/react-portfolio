import Header from "./Header";
import {connect} from "react-redux";
import {updateMenuStatus} from "../../redux/menu-reducer";

const mapStateToProps = (state) => {
  return{
    menuData: state.menu.menuList,
    isOpen: state.menu.isOpen
  }
}


const mapDispatchToProps = dispatch => {
  return{
    setMenuStatus: () => {
      dispatch(updateMenuStatus());
    }
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer;