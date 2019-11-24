import React from 'react';
import style from './Breadcrumbs.module.scss'
import {NavLink} from "react-router-dom";

const Breadcrumbs = props => {
  
  const breadcrumb = props.data.map((breadcrumbItem, index, currentValue) =>
	<li key={index} className={style.breadcrumbs__item}>
	  {currentValue.length - 1 === index ? `${breadcrumbItem.name}` :
		<NavLink to={breadcrumbItem.url} className={style.breadcrumbs__link}>{breadcrumbItem.name}</NavLink>}
	</li>
  )
  
  return(
	<ul className={`d-flex ${style.breadcrumbs}`}>
	  <li className={style.breadcrumbs__item}><NavLink to='/' className={style.breadcrumbs__link}>Главная</NavLink></li>
	  {breadcrumb}
	</ul>
  )
}
export default Breadcrumbs;