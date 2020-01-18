import React from 'react';
import {Route, Switch} from "react-router-dom";
import style from "./Dashboard.module.scss";
import AdminMenuContainer from "../../components/Menu/MenuDashboard/MenuDashboardContainer";
import AdminPagePortfolioContainer from "./PagePortfolio/PagePortfolioContainer";
import HeaderAdmin from "../_layout/Header/HeaderAdmin/HeaderAdmin";
import AdminPageMenuContainer from "./PageMenu/PageMenuContainer";
import ServicesContainer from "./PageServices/PageServicesContainer";
import ServicesSingleContainer from "./PageServices/ServicesSingle/ServicesSingleContainer";
import * as ROUTES from "../../constants/routes";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Dashboard = ({feedbackCount}) => {
  const [open, setOpen] = React.useState(false);
  
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
		  <Route exact path={ROUTES.ADMIN}>
			<Typography variant="h2" component="h1" gutterBottom={true}>
			  Dashboard
			</Typography>
			<Typography paragraph>
			  Рано или поздно здесь что-то будет
			</Typography>
		  </Route>
		  <Route path={ROUTES.ADMIN_MENU} component={AdminPageMenuContainer}/>
		  <Route path={ROUTES.ADMIN_PORTFOLIO} component={AdminPagePortfolioContainer}/>
		  <Route exact path={ROUTES.ADMIN_SERVICES} component={ServicesContainer}/>
		  <Route path={ROUTES.ADMIN_SERVICES_SINGLE} component={ServicesSingleContainer}/>
		</Switch>
	  </main>
	  </Box>
	</>
  )
};
export default Dashboard;