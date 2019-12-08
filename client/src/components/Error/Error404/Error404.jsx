import React from 'react';
import style from './Error404.module.scss'
import img from '../../../assets/img/404.svg'

const Error404 = () => {
  return (
	<div className="wrapper">
	  <div className='text-center'>
		<img src={img} alt=""/>
		<h1 className={style.title}>404</h1>
		<div className={style.subTitle}>Страница не найдена</div>
		<p className={style.text}>К сожалению cтраница, которую вы искали, не существует.</p>
		<a href="" className={style.goHome}>Вернуться на главную</a>
	  </div>
	</div>
  )
}
export default Error404;