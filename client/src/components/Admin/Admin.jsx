import React from 'react';
import AdminPageMenuContainer from "./AdminPage/AdminPageMenu/AdminPageMenuContainer";
import AdminPagePortfolioContainer from "./AdminPage/AdminPagePortfolio/AdminPagePortfolioContainer";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import style from "./Admin.module.scss";
import adminMenu from "./AdminMenu/AdminMenu.module.scss";
import AdminMenuContainer from "./AdminMenu/AdminMenuContain";
import AdminAuthContainer from "./AdminAuth/AdminAuthContainer";

const Admin = props => {
  
  const { path} = useRouteMatch(),
	    {isAuth} = props;
  
  const aside = isAuth && <aside className={adminMenu.aside}><AdminMenuContainer/></aside>;
  const authForm = !isAuth && <AdminAuthContainer/>
  
  return (
	<div id="main">
	  <div className="wrapper">
		<div className={`d-flex ${style.wrap}`}>
		  {aside}
		  <main className={style.main}>
			<Switch>
			  <Route exact path={path}>
				{authForm}
			  </Route>
			  <Route path={`${path}/menu`} component={AdminPageMenuContainer}/>
			  <Route path={`${path}/portfolio`} component={AdminPagePortfolioContainer}/>
			</Switch>
		  </main>
		</div>
	  </div>
	</div>
  )
}
export default Admin