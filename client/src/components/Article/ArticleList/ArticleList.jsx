import React from 'react';
import Article from '../Article';
import style from '../Article.module.scss';
import axios from 'axios';

class ArticleList extends React.Component{
  

componentDidMount() {
  axios.get('/api/portfolio').then(response => {
	this.props.setPortfolio(response.data)
  });
}

  
render() {
  const {portfolioList} =  this.props;
  
	const portfolioLists = portfolioList.map((article,index) =>
	  <li key={index} className={style.articleList__item}>
		<Article articleItem={article}/>
	  </li>
	)
 
	return(
	  <ul className={style.articleList}>{portfolioLists}</ul>
	)
}
}
export default ArticleList;
