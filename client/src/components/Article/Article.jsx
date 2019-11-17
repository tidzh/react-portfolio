import React from 'react';
import style from '../Article/Article.module.scss';
import FormButton from "../Form/FormButton/FormButton";


const Article = props => {
	const {articleItem} = props;
	return(
		<div className={style.articleList__itemWrap}>
		  <div className={style.articleList__itemImg}><img src={articleItem.img} alt=""/></div>
		  <div className={style.articleList__itemTitle}>{articleItem.title}</div>
		  <FormButton>Нравится ({articleItem.like})</FormButton>
		</div>
	)
}

export default Article;