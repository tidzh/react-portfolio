import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import style from "./Admin.module.scss";
import adminMenu from "./AdminMenu/AdminMenu.module.scss";
import AdminMenuContainer from "./AdminMenu/AdminMenuContainer";
import AdminPagePortfolioContainer from "./AdminPage/AdminPagePortfolio/AdminPagePortfolioContainer";
import HeaderAdmin from "../../pages/_layout/Header/HeaderAdmin/HeaderAdmin";
import AdminPageMenuContainer from "./AdminPage/AdminPageMenu/AdminPageMenuContainer";

const Admin = props => {
  const {path} = useRouteMatch(),
	    {userEmail, userName}  = props
  
  return (
    <>
  <HeaderAdmin/>
	<div id="main" className={style.wrap}>
		<div className={`d-flex ${style.wrap}`}>
		  <aside className={adminMenu.aside}><AdminMenuContainer/></aside>
		  <main className={style.main}>
			<Switch>
			  <Route exact path={path}>
				<h1 className='h3'>Dashboard</h1>
				<p>Рано или поздно здесь что-то будет</p>
			  </Route>
			  <Route path={`${path}/menu`} component={AdminPageMenuContainer}/>
			  <Route path={`${path}/portfolio`} component={AdminPagePortfolioContainer}/>
			</Switch>
		  </main>
		</div>
	</div>
	 </>
  )
}
export default Admin