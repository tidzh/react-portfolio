import React from 'react';
import {NavLink} from "react-router-dom";
import style from './AdminMenu.module.scss'
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import ListIcon from '@material-ui/icons/List';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import EmailIcon from '@material-ui/icons/Email';
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const AdminMenu = props => {
  
  const {adminSidebar, isOpen, handleDrawerClose} = props,
	drawerWidth = 240;
  
  const useStyles = makeStyles(theme => ({
	toolbar: {
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'flex-end',
	  padding: theme.spacing(0, 1),
	  ...theme.mixins.toolbar,
	},
	drawer: {
	  width: drawerWidth,
	  flexShrink: 0,
	  whiteSpace: 'nowrap',
	},
	drawerOpen: {
	  width: drawerWidth,
	  position:'relative',
	  transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	  }),
	},
	drawerClose: {
	  transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	  }),
	  overflowX: 'hidden',
	  width: theme.spacing(7) + 1,
	  [theme.breakpoints.up('sm')]: {
		width: theme.spacing(9) + 1,
	  },
	}
  }));
  
  const classes = useStyles(),
	theme = useTheme(),
	matches = useMediaQuery(theme.breakpoints.up('md'));
  
  const getIcon = icon => {
	switch (icon) {
	  case "DashboardIcon":
		return (<DashboardIcon/>);
	  case "WorkIcon":
		return (<WorkIcon/>);
	  case "ListIcon":
		return (<ListIcon/>);
	  case "AccountBalanceWalletIcon":
		return (<AccountBalanceWalletIcon/>);
	  case "EmailIcon":
		return (<EmailIcon/>);
	  default:
		return (<HomeIcon/>);
	}
  };
  
  const menus = adminSidebar.map((menuItem) =>
	<ListItem button key={menuItem.id}>
	  <NavLink exact
			   to={`${menuItem.url}`}
			   className={style.menuLink}
			   activeClassName={style.menuLinkActive}>
		<ListItemIcon>{getIcon(menuItem.icon)}</ListItemIcon>
		<ListItemText primary={menuItem.name}/>
	  </NavLink>
	</ListItem>
  );
  
  return (
	<Drawer
	  variant="permanent"
	  className={clsx(classes.drawer, {
		[classes.drawerOpen]: matches ? !isOpen : isOpen,
		[classes.drawerClose]: matches ? isOpen : !isOpen
	  })}
	  classes={{
		paper: clsx({
		  [classes.drawerOpen]: matches ? !isOpen : isOpen,
		  [classes.drawerClose]: matches ? isOpen : !isOpen,
		})
	  }}>
	  <div className={classes.toolbar}>
		<IconButton onClick={handleDrawerClose}>
		  <ChevronLeftIcon/>
		</IconButton>
	  </div>
	  <Divider/>
	  <List>{menus}</List>
	</Drawer>
  )
  
};
export default AdminMenu;