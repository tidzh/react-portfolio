import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import style from "./Admin.module.scss";
import AdminMenuContainer from "./AdminMenu/AdminMenuContainer";
import AdminPagePortfolioContainer from "./AdminPage/AdminPagePortfolio/AdminPagePortfolioContainer";
import HeaderAdmin from "../pages/_layout/Header/HeaderAdmin/HeaderAdmin";
import AdminPageMenuContainer from "./AdminPage/AdminPageMenu/AdminPageMenuContainer";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


const Admin = props => {
  const {path} = useRouteMatch(),
	{userEmail, userName} = props,
	[open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
	setOpen(true);
  };
  
  const handleDrawerClose = () => {
	setOpen(false);
  };
  
  return (
	<Box display='flex'>
	  <HeaderAdmin handleDrawerOpen={handleDrawerOpen} isOpen={open}/>
	  <AdminMenuContainer handleDrawerClose={handleDrawerClose} isOpen={open}/>
	  <main className={style.root}>
		<Switch>
		  <Route exact path={path}>
			<Typography variant="h2" component="h1" gutterBottom={true}>
			  Dashboard
			</Typography>
			<Typography paragraph>
			  Рано или поздно здесь что-то будет
			</Typography>
		  </Route>
		  <Route path={`${path}/menu`} component={AdminPageMenuContainer}/>
		  <Route path={`${path}/portfolio`} component={AdminPagePortfolioContainer}/>
		</Switch>
	  </main>
	</Box>
  )
}
export default Admin