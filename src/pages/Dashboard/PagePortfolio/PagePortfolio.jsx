import React from 'react';
import style from './PagePortfolio.module.scss'
import Typography from "@material-ui/core/Typography";

const PagePortfolio = ({portfolio}) => {
  
  const portfolios = portfolio.map(portfolio =>
	<li className='mb-20 portfolio__item' key={portfolio._id}>
	  <div className='h4'>{portfolio.title}</div>
	  <div className={style.portfolioItem}>{portfolio.text}</div>
	</li>);
  
  return (
	<>
	  <Typography variant="h4" component="h1" gutterBottom={true}>
		Список работ
	  </Typography>
	  <ul className={style.wrap}>{portfolios}</ul>
	</>
  )
};
export default PagePortfolio;