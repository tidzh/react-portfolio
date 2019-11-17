import React from "react";
import ArticleList from "../../Article/ArticleList/ArticleList";
import ArticleListContainer from "../../Article/ArticleList/ArticleListContainer";
import ArticleListSortContainer from "../../Article/ArticleListSort/ArticleListSortContainer";

const Portfolio = props => {
	return(
	  <div className="wrapper">
		  <h1 className="h1">Все работы</h1>
		<div className="article-wrap">
		  <div className="mt-40 mb-20"><ArticleListSortContainer/></div>
		  <ArticleListContainer/>
		</div>
	  </div>
	)
}
export default Portfolio;