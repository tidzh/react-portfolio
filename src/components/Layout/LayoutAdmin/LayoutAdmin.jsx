import React from 'react'
import style from "../../Admin/Admin.module.scss";
import adminMenu from "../../Admin/AdminMenu/AdminMenu.module.scss";
import AdminMenuContainer from "../../Admin/AdminMenu/AdminMenuContainer";

const LayoutAdmin = (props) => {
	return (
	  <div id="main">
		<div className={`d-flex ${style.wrap}`}>
		  <aside className={adminMenu.aside}>
			<AdminMenuContainer/>
		  </aside>
		  <main className={style.main}>{props.children}</main>
		</div>
	  </div>
	)
}
export default LayoutAdmin