import React from 'react';
import menuStyle from './Menu.module.scss';
import {NavLink} from "react-router-dom";

const Menu = props => {
  if (!props.menu) {
    return false
  }
    const {menu, menuState} = props;
    
    const menuLists = menu.map((menuList) =>
      <li key={menuList._id} className={menuStyle.item}>
          <NavLink activeClassName={menuStyle.link_active} exact to={`/${menuList.url}`} className={menuStyle.link}>{menuList.name}</NavLink>
      </li>
    );
    return(
      <nav style={{display:menuState ? 'block':'none' }} className={menuStyle.wrap}>
        <ul className="d-flex">{menuLists}</ul>
      </nav>
    )
}

export default Menu;