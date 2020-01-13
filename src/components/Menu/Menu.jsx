import React from 'react';
import style from './Menu.module.scss';
import {NavLink} from "react-router-dom";
import Box from "@material-ui/core/Box";

const Menu = ({menu}) => {
  
  const menuLists = menu.map((menuList) =>
	<li key={menuList._id}>
	  <NavLink activeClassName={style.linkActive} exact to={`/${menuList.url}`}
			   className={style.link}>{menuList.name}</NavLink>
	</li>
  );
  return (
	<Box component="nav" ml="auto" className={style.root}>
	  <Box component="ul" display="flex">{menuLists}</Box>
	</Box>
  )
};

export default Menu;