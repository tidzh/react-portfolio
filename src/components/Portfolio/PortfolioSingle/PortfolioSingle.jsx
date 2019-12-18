import React from 'react';
import style from './PortfolioSingle.module.scss'
import icon from '../../../assets/img/icons.svg'

const PortfolioSingle = props => {

  const {title, text, img} = props.portfolioSingle;
  
  return (
	<div className="wrapper">
	  {props.breadcrumbs}
	  <h1 className={style.h1}>{title}</h1>
	  <div className={style.wrap}>
		<div className={style.left}>
		  <img
			src={'https://lmpixels.com/demo/sunshine-demo/sunshine-version-1/sunshine-v1-html-template/images/portfolio/portfolio_details/1_2.jpg'}
			alt=""/>
		</div>
		<div className={style.right}>
		  <div className={style.projectItem}>
			<div className={style.title}>Описание проекта</div>
			<ul className={style.mainInfo}>
			  <li className={`d-flex align-items-center ${style.mainInfoItem}`}>
				<svg className="icon-link"><use xlinkHref={`${icon}#icon-link`}></use></svg>
				<a href="www.project-site.com" target='_self' className={style.url}>www.project-site.com</a>
			  </li>
			  <li className='d-flex align-items-center'>
				<svg className="icon-link"><use xlinkHref={`${icon}#icon-calendar`}></use></svg>
				~ 14 дней
			  </li>
			</ul>
			<p>{text}</p>
		  </div>
		  <div className={style.projectItem}>
			<div className={style.title}>Тип работы</div>
			<ul className={`d-flex ${style.tags}`}>
			  <li className={style.tagsItem}><span className={style.tagsName}>HTML5</span></li>
			  <li className={style.tagsItem}><span className={style.tagsName}>CSS3</span></li>
			  <li className={style.tagsItem}><span className={style.tagsName}>Ajax</span></li>
			  <li className={style.tagsItem}><span className={style.tagsName}>PHP5</span></li>
			</ul>
		  </div>
		  <div className={style.projectItem}>
			<div className={style.title}>Технологии</div>
			<ul className={`d-flex ${style.tags}`}>
			  <li className={style.tagsItem}><span className={style.tagsName}>HTML5</span></li>
			  <li className={style.tagsItem}><span className={style.tagsName}>CSS3</span></li>
			  <li className={style.tagsItem}><span className={style.tagsName}>Ajax</span></li>
			  <li className={style.tagsItem}><span className={style.tagsName}>PHP5</span></li>
			</ul>
		  </div>
		</div>
	  </div>
	</div>
  )
}
export default PortfolioSingle;