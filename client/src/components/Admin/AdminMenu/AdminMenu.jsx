import React from 'react';
import {NavLink} from "react-router-dom";
import style from './AdminMenu.module.scss'

const AdminMenu = props => {
 
	const {adminSidebar} = props;
	
	const menus = adminSidebar.map((menuItem) =>
		<li key={menuItem.id} className={style.menu__item}>
		  <NavLink exact
				   to={`/admin/${menuItem.url}`}
				   className={style.menu__link}
				   activeClassName={style.menu__link_active}>{menuItem.name}</NavLink>
		</li>
	)
	
    return(<ul className={style.menu}>{menus}</ul>)
}
export default AdminMenu;