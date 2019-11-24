import React from 'react';
import style from './PortfolioListItem.module.scss';
import FormButton from "../../Form/FormButton/FormButton";
import {Link} from "react-router-dom";


const PorfolioListItem = props => {
	const {articleItem} = props;
	return(
	  <>
		<div className={style.portfolioList__itemWrap}>
		  <Link to={`/portfolio/${articleItem.url}.html`} >
		  <div className={style.portfolioList__itemImg}><img src={articleItem.img} alt=""/></div>
		  <div className={style.portfolioList__itemTitle}>{articleItem.title}</div>
		  </Link>
		  <FormButton>Нравится ({articleItem.like})</FormButton>
		</div>
	  </>
	)
}

export default PorfolioListItem;