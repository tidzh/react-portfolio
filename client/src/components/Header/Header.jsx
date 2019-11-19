import React from 'react';
import Menu from '../Menu/Menu';
import axios from "axios";

class Header extends React.Component {

componentDidMount() {
  axios.get('api/menu').then(response => {
    this.props.setMenu(response.data)
  })
  
}
  
burgerState = () => this.props.setMenuStatus();
 
render() {
  
 const {menuData, isOpen} = this.props;
 
  return (
      <header className="header">
        <div className="wrapper">
          <div className="d-flex">
		   <Menu menu={menuData} menuState={isOpen}/>
           <button className={`ml-auto burger ${isOpen ? '':'burger_active'}`} onClick={this.burgerState}
           >&times;</button>
          </div>
        </div>
        </header>
  )
}
}
export default Header;