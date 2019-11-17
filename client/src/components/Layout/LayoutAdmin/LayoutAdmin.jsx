import React from 'react'
import AdminMenu from "../../Admin/AdminMenu/AdminMenu";
import style from "../../Admin/Admin.module.scss";
import adminMenu from "../../Admin/AdminMenu/AdminMenu.module.scss";
import AdminMenuContainer from "../../Admin/AdminMenu/AdminMenuContain";

const LayoutAdmin = (props) => {
	return (
	  <div id="main">
	  <div className="wrapper">
		<div className={`d-flex ${style.wrap}`}>
		  <aside className={adminMenu.aside}>
			<AdminMenuContainer/>
		  </aside>
		  <main className={style.main}>{props.children}</main>
		</div>
	  </div>
	  </div>
	)
}
export default LayoutAdmin