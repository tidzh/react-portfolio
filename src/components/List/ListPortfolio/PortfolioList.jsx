import React from 'react';
import Grid from "@material-ui/core/Grid";
import Pagination from "../../common/Pagination/Pagination";
import style from "./PortfolioListItem.module.scss";
import {NavLink} from "react-router-dom";
import Box from "@material-ui/core/Box";
import {getImg} from "../../../utils/functionHelper";

const PortfolioList = ({portfolioList, pageSize, totalPortfolio, currentPage, handlerPagination, isFetching, setPortfolioLike, isLike, limit}) => {
  
  const portfolioLists = portfolioList.map((article, index) =>
	<Grid item md={3} key={index}>
	  <PortfolioListItem isLike={isLike}
						 index={index}
						 articleItem={article}
						 setPortfolioLike={setPortfolioLike}/>
	</Grid>
  );
  return (
	<>
	  {isFetching}
	  <Grid container spacing={3}>
		{portfolioLists}
	  </Grid>
	  {!limit &&
	  <Pagination currentPage={currentPage}
				  handlerPagination={handlerPagination}
				  totalPortfolio={totalPortfolio}
				  pageSize={pageSize}/>
	  }
	</>
  )
};
const PortfolioListItem = ({articleItem}) => {

  return (
	<div className={style.item}>
	  <NavLink to={`/portfolio/${articleItem.url}.html`} className={style.link}>
		<div className={style.img}><img src={getImg(articleItem.img)} alt={articleItem.title}/></div>
		<Box className={style.footer} p={2}>
		  <div className={style.name}>{articleItem.title}</div>
		  <div className={style.category}>Категория</div>
		</Box>
	  </NavLink>
	</div>
  )
};
export default PortfolioList;