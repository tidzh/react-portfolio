import React from 'react';
import style from './PortfolioListItem.module.scss';
import FormButton from "../../Form/FormButton/FormButton";
import {NavLink} from "react-router-dom";


const PorfolioListItem = props => {
	const {articleItem, setPortfolioLike} = props;
	
	
	return(
	  <>
		<div className={style.portfolioList__itemWrap}>
		  <NavLink to={`/portfolio/${articleItem.url}.html`} >
		  <div className={style.portfolioList__itemImg}><img src={articleItem.img} alt=""/></div>
		  <div className={style.portfolioList__itemTitle}>{articleItem.title}</div>
		  </NavLink>
		  <FormButton onClick={()=> setPortfolioLike(articleItem._id, articleItem.like)}>Нравится ({articleItem.like})</FormButton>
		</div>
	  </>
	)
}

export default PorfolioListItem;