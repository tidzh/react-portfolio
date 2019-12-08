import React from 'react';
import style from './HeaderAdmin.module.scss'
import UserHeaderWidgetContainer from "../../User/UserHeaderWidget/UserHeaderWidgetContainer";

const HeaderAdmin = () => {
  return (
    <header className={style.header}>
	  <div className='d-flex align-items-center'>
		<div className={style.header_logo}>Dashboard</div>
		  <UserHeaderWidgetContainer/>
	  </div>
	</header>
  )
}
export default HeaderAdmin;