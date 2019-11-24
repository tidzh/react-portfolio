import React from 'react';
import PortfolioListContainer from "../../Portfolio/PortfolioList/PortfolioListContainer";
import LayoutFront from "../../Layout/LayoutFront/LayoutFront";


const Home = () => {
    return(
	  <div className="wrapper">
		<div className="d-flex align-self-center">
		  <h1 className="h1">Последние работы</h1>
		</div>
		<div className="article-wrap">
		  <PortfolioListContainer/>
		</div>
	  </div>
	)
}
export default Home;