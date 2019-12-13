import React from 'react';
import style from './HeaderAdmin.module.scss'
import UserHeaderWidgetContainer from "../../../User/UserHeaderWidget/UserHeaderWidgetContainer";
import Notifications from "../../../Helpers/Notifications/Notifications";

const HeaderAdmin = () => {
  return (
    <header className={style.header}>
	  <div className='d-flex align-items-center'>
		<div className={style.header_logo}>Dashboard</div>
		<div className={style.menu}>
		  {/*<Notifications/>*/}
		  <UserHeaderWidgetContainer/>
		</div>
	  </div>
	</header>
  )
}
export default HeaderAdmin;