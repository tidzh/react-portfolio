import React, {useEffect } from 'react';
import ArticleListContainer from "../../Article/ArticleList/ArticleListContainer";


const Home = () => {
  
    return(
	  <div className="wrapper">
		<div className="d-flex align-self-center">
		  <h1 className="h1">Последние работы</h1>
		</div>
		<div className="article-wrap">
		  <ArticleListContainer/>
		</div>
	  </div>
	)
}
export default Home;