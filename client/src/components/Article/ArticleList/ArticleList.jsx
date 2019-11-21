import React from 'react';
import Article from '../Article';
import style from '../Article.module.scss';
import stylePag from '../ArticlePagination/ArticlePagination.module.scss';
import axios from 'axios';


class ArticleList extends React.Component{
  

componentDidMount() {
  axios.get(`/api/portfolio?page=${this.props.currentPage}`).then(response => {
	this.props.setPortfolio(response.data.items, response.data.totalCount);
  });
}

handlerPagination = (pageNumber) => {
  this.props.setCurrentPage(pageNumber);
  axios.get(`/api/portfolio?page=${pageNumber}`).then(response => {
	this.props.setPortfolio(response.data.items, response.data.totalCount)
  });
}

render() {
  const {portfolioList, pageSize, totalPortfolio, currentPage} =  this.props,
	    pageCount = Math.ceil(totalPortfolio / pageSize);
  
	const portfolioLists = portfolioList.map((article,index) =>
	  <li key={index} className={style.articleList__item}>
		<Article articleItem={article}/>
	  </li>
	)
  let paginationArr = [];
	for (let i = 1; i <= pageCount; i++) {
	  paginationArr.push(i);
	}
  const pagination = paginationArr.map((paginationItem, index) =>
	<li key={index}
		onClick={(evt)=> this.handlerPagination(paginationItem)}
		className={`${stylePag.pagination__item} ${currentPage === paginationItem ? stylePag.pagination__item_active : ''}`}>{paginationItem}</li>
  )
  
  return(
	  <>
		<ul className={style.articleList}>{portfolioLists}</ul>
		<ul className={`${stylePag.pagination} d-flex`}>{pagination}</ul>
	</>
	)
}
}
export default ArticleList;
