import React from 'react';
import style from './HeaderAdmin.module.scss'
import UserHeaderWidgetContainer from "../../../../components/Widget/WidgetUser/WidgetUserContainer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from "clsx";
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import MailIcon from '@material-ui/icons/Mail';
import withWidth from '@material-ui/core/withWidth';
import {NavLink} from "react-router-dom";

const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
  menuButton: {
	marginRight: 36,
	[theme.breakpoints.up('md')]: {
	  display: 'none',
	},
  },
  appBar: {
	backgroundColor: '#2f4050',
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
	  easing: theme.transitions.easing.sharp,
	  duration: theme.transitions.duration.leavingScreen,
	}),
  },
  hide: {
	display: 'none',
  },
  appBarShift: {
	marginLeft: drawerWidth,
	width: `calc(100% - ${drawerWidth}px)`,
	transition: theme.transitions.create(['width', 'margin'], {
	  easing: theme.transitions.easing.sharp,
	  duration: theme.transitions.duration.enteringScreen,
	}),
  },
}));


const HeaderAdmin = ({feedbackCount, handleDrawerOpen, isOpen}) => {
  
  const classes = useStyles();
  
  return (
	<AppBar
	  position="fixed"
	  className={clsx(classes.appBar, {
		[classes.appBarShift]: isOpen,
	  })}
	>
	  <Toolbar>
		<IconButton
		  color="inherit"
		  aria-label="open drawer"
		  onClick={handleDrawerOpen}
		  edge="start"
		  className={clsx(classes.menuButton, {
			[classes.hide]: isOpen,
		  })}
		>
		  <MenuIcon/>
		</IconButton>
		<NavLink to="/" className={style.home}><HomeIcon/></NavLink>
		<div className={style.logo}>Dashboard</div>
		<Box ml='auto' display='flex'>
		  <Box mr={1}><IconButton aria-label="show 4 new mails" color="inherit">
			<Badge badgeContent={feedbackCount} color="secondary">
			  <MailIcon/>
			</Badge>
		  </IconButton>
		  </Box>
		  <UserHeaderWidgetContainer/>
		</Box>
	  </Toolbar>
	</AppBar>
  )
};
export default withWidth()(HeaderAdmin);