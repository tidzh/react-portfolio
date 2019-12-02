import React from 'react';
import {NavLink} from "react-router-dom";
import style from './AdminMenu.module.scss'

const AdminMenu = props => {
 
	const {adminSidebar} = props;
	
	const menus = adminSidebar.map((menuItem) =>
		<li key={menuItem.id} className={style.menu__item}>
		  {menuItem.icon}
		  {console.log(typeof menuItem.icon)}
		  
		  <NavLink exact
				   to={`${menuItem.url}`}
				   className={style.menuLink}
				   activeClassName={style.menuLinkActive}>{menuItem.name}</NavLink>
		</li>
	)
	
    return(
      <>
      <div className={style.asideTitle}>Меню</div>
      <ul className={style.menu}>{menus}</ul>
	</>
	)
	
}
export default AdminMenu;