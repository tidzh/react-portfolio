import React from "react";
import PortfolioListContainer from "../../Portfolio/PortfolioList/PortfolioListContainer";
import PortfolioListSortContainer from "../../Portfolio/PortfolioListSort/PortfolioListSortContainer";
import LayoutFront from "../../Layout/LayoutFront/LayoutFront";

const Portfolio = props => {
	return(
	  <div className="wrapper">
		  <h1 className="h1">Все работы</h1>
		<div className="article-wrap">
		  <div className="mt-40 mb-20"><PortfolioListSortContainer/></div>
		  <PortfolioListContainer/>
		</div>
	  </div>
	)
}
export default Portfolio;