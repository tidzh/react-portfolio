import React from 'react';
import Article from '../Article';
import style from '../Article.module.scss';

const ArticleList = props => {
  
  
  
    const {portfolioList} = props;
  
	let portfolioLists = portfolioList.map(article =>
	  <li key={article.id} className={style.articleList__item}>
		<Article articleItem={article}/>
	  </li>
	)
 
	return(
	  <ul className={style.articleList}>{portfolioLists}</ul>
	)
}
export default ArticleList;
