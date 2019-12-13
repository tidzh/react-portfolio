import React from 'react';
import Menu from '../../Menu/Menu';
import style from './Header.module.scss'

const Header = props => {
 const {menuData, isOpen, burgerState} = props;
 
  return (
      <header className={style.root}>
        <div className="wrapper">
          <div className="d-flex">
		   <Menu menu={menuData} menuState={isOpen}/>
           {/*<button className={`ml-auto burger ${isOpen ? '':'burger_active'}`} onClick={burgerState}*/}
           {/*>&times;</button>*/}
          </div>
        </div>
        </header>
  )
}
export default Header;