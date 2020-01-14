import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import style from "./Dashboard.module.scss";
import AdminMenuContainer from "../../components/Menu/MenuDashboard/MenuContainer";
import AdminPagePortfolioContainer from "./PagePortfolio/PagePortfolioContainer";
import HeaderAdmin from "../_layout/Header/HeaderAdmin/HeaderAdmin";
import AdminPageMenuContainer from "./PageMenu/PageMenuContainer";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ServicesContainer from "./PageServices/PageServicesContainer";
import ServicesSingleContainer from "./PageServices/ServicesSingle/ServicesSingleContainer";


const Dashboard = ({feedbackCount}) => {
  const {path} = useRouteMatch(),
	[open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
	setOpen(true);
  };
  const handleDrawerClose = () => {
	setOpen(false);
  };
  
  return (
	<>
	  <HeaderAdmin handleDrawerOpen={handleDrawerOpen} isOpen={open} feedbackCount={feedbackCount}/>
	  <Box display='flex' flex={1}>
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
		  <Route exact path={`${path}/services`} component={ServicesContainer}/>
		  <Route path={`${path}/services/:url.html`} component={ServicesSingleContainer}/>
		</Switch>
	  </main>
	  </Box>
	</>
  )
};
export default Dashboard;