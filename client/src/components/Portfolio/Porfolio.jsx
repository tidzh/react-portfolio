import React from 'react';
import style from './Portfolio.module.scss';
import FormButton from "../Form/FormButton/FormButton";


const Porfolio = props => {
	const {articleItem} = props;
	return(
		<div className={style.articleList__itemWrap}>
		  <div className={style.articleList__itemImg}><img src={articleItem.img} alt=""/></div>
		  <div className={style.articleList__itemTitle}>{articleItem.title}</div>
		  <FormButton>Нравится ({articleItem.like})</FormButton>
		</div>
	)
}

export default Porfolio;