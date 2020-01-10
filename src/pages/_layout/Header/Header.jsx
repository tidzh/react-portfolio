import React from 'react';
import Menu from '../../../components/Menu/Menu';
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {NavLink} from "react-router-dom";
import style from './Header.module.scss'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import {Hidden} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const Header = props => {
  const {menuData} = props;
  
  return (
	  <AppBar position="fixed" color="inherit">
		<Container>
		  <Toolbar disableGutters={true} component={Box} flexWrap="wrap">
			<Box display="flex" alignItems="center" className={style.wrap}>
			  <NavLink to='/' className={style.logo}>
				Kondakov.Dev
			  </NavLink>
			  <Box component={Hidden} smUp>
				<IconButton edge="start" color="inherit">
				  <MenuIcon/>
				</IconButton>
			  </Box>
			</Box>
			<Menu menu={menuData}/>
		  </Toolbar>
		</Container>
	  </AppBar>
  )
};
export default Header;