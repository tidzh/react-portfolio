import React from 'react';
import Preloader from "../../common/Preloader/Preloader";

const PortfolioSingle = props => {
  if (!props.portfolioSingle) {
	return <Preloader/>
  }
  const {title, text, img} = props.portfolioSingle;
  
  return(
	<div className="wrapper">
	  <h1 className="h1 mb-20">{title}</h1>
	  <img src={img} alt=""/>
	  <p>{text}</p>
	</div>
  )
}
export default PortfolioSingle;