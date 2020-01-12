import React from 'react';
import style from './PortfolioSingle.module.scss'
import LinkIcon from '@material-ui/icons/Link';
import DateRangeIcon from '@material-ui/icons/DateRange';
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const PortfolioSinglePage = props => {
  
  const {title, text, img} = props.portfolioSingle;
  
  return (
	<Container maxWidth="lg">
	  <Box mt={5}>
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
				<li className={style.mainInfoItem}>
				  <LinkIcon/>
				  <a href="www.project-site.com" target='_self' className={style.url}>www.project-site.com</a>
				</li>
				<li className={style.mainInfoItem}>
				  <DateRangeIcon/>
				  ~ 14 дней
				</li>
			  </ul>
			  <p>{text}</p>
			</div>
			<div className={style.projectItem}>
			  <div className={style.title}>Тип работы</div>
			  <Box component="ul" display='Flex' className={style.tags}>
				<li className={style.tagsItem}><span className={style.tagsName}>HTML5</span></li>
				<li className={style.tagsItem}><span className={style.tagsName}>CSS3</span></li>
				<li className={style.tagsItem}><span className={style.tagsName}>Ajax</span></li>
				<li className={style.tagsItem}><span className={style.tagsName}>PHP5</span></li>
			  </Box>
			</div>
			<div className={style.projectItem}>
			  <div className={style.title}>Технологии</div>
			  <Box component="ul" display='Flex' className={style.tags}>
				<li className={style.tagsItem}><span className={style.tagsName}>HTML5</span></li>
				<li className={style.tagsItem}><span className={style.tagsName}>CSS3</span></li>
				<li className={style.tagsItem}><span className={style.tagsName}>Ajax</span></li>
				<li className={style.tagsItem}><span className={style.tagsName}>PHP5</span></li>
			  </Box>
			</div>
		  </div>
		</div>
	  </Box>
	</Container>
  )
};
export default PortfolioSinglePage;