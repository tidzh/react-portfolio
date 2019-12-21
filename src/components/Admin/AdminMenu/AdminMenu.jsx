import React from 'react';
import {NavLink} from "react-router-dom";
import style from './AdminMenu.module.scss'
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {makeStyles} from "@material-ui/core";

const AdminMenu = props => {
  
  const {adminSidebar, isOpen, handleDrawerClose} = props;
  
  const drawerWidth = 240;
  
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
	},
  }));
  
  const classes = useStyles();
  
  const menus = adminSidebar.map((menuItem) =>
	<ListItem button key={menuItem.id}>
	  <NavLink exact
			   to={`${menuItem.url}`}
			   className={style.menuLink}
			   activeClassName={style.menuLinkActive}>
		<ListItemIcon><MailIcon/></ListItemIcon>
		<ListItemText primary={menuItem.name}/>
	  </NavLink>
	</ListItem>
  )
  
  return (
	  <Drawer
		variant="permanent"
		className={clsx(classes.drawer, {
		  [classes.drawerOpen]: isOpen,
		  [classes.drawerClose]: !isOpen,
		})}
		classes={{
		  paper: clsx({
			[classes.drawerOpen]: isOpen,
			[classes.drawerClose]: !isOpen,
		  }),
		}}
	  >
		<div className={classes.toolbar}>
		  <IconButton onClick={handleDrawerClose}>
			<ChevronLeftIcon/>
		  </IconButton>
		</div>
		<Divider/>
		<List>{menus}</List>
	  </Drawer>
  )
  
}
export default AdminMenu;