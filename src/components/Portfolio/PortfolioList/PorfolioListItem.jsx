import React from 'react';
import style from './PortfolioListItem.module.scss';
import {NavLink} from "react-router-dom";
import Box from "@material-ui/core/Box";


const PortfolioListItem = props => {
	const {articleItem, setPortfolioLike, isLike} = props;
	
	return(
		<div className={style.item}>
		  <NavLink to={`/portfolio/${articleItem.url}.html`} className={style.link}>
		  <div className={style.img}><img src={articleItem.img} alt=""/></div>
		  <Box className={style.footer} p={2}>
			<div className={style.name}>{articleItem.title}</div>
			<div className={style.category}>Категория</div>
		  </Box>
		  </NavLink>
		  {/*<FormButton*/}
			{/*disable={isLike.some(id => id === articleItem._id)}*/}
			{/*onClick={()=> setPortfolioLike(articleItem._id, articleItem.like)}>Нравится ({articleItem.like})</FormButton>*/}
		</div>
	)
}

export default PortfolioListItem;