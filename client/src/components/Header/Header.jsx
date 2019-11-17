import React from 'react';
import Menu from '../Menu/Menu';

const Header = props => {
 
 const {menuData, isOpen, setMenuStatus} = props,
        burgerState = () => setMenuStatus();
 
  return (
      <header className="header">
        <div className="wrapper">
          <div className="d-flex">
		   <Menu menu={menuData} menuState={isOpen}/>
           <button className={`ml-auto burger ${isOpen ? '':'burger_active'}`} onClick={burgerState}
           >&times;</button>
          </div>
        </div>
        </header>
  )
}
export default Header;