import React from 'react';
import AdminPageMenuContainer from "./AdminPage/AdminPageMenu/AdminPageMenuContainer";
import AdminPagePortfolioContainer from "./AdminPage/AdminPagePortfolio/AdminPagePortfolioContainer";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import AdminAuthContainer from "./AdminAuth/AdminAuthContainer";

const Admin = props => {
  let { path, url } = useRouteMatch();
  return (
	  <Switch>
		<Route exact path={path}>
		  Главная страница админки
		  <AdminAuthContainer/>
		</Route>
		<Route path={`${path}/menu`} component={AdminPageMenuContainer}/>
		<Route path={`${path}/portfolio`} component={AdminPagePortfolioContainer}/>
	  </Switch>
  )
}
export default Admin