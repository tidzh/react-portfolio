import React from 'react';
import style from './PortfolioListItem.module.scss';
import PorfolioListItem from './PorfolioListItem';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Pagination from "../../common/Pagination/Pagination";



const PortfolioList = props => {
  
  const {portfolioList, pageSize, totalPortfolio, currentPage, handlerPagination, isFetching, setPortfolioLike, isLike, limit} =  props;
  
  const portfolioLists = portfolioList.map((article,index) =>
    <Grid item md={3} key={index}>
      <PorfolioListItem isLike={isLike} index={index} articleItem={article} setPortfolioLike={setPortfolioLike}/>
    </Grid>
  )
  
  return(
    <>
      <Grid container spacing={3}>
          {isFetching}
          {portfolioLists}
      </Grid>
      {!limit && <Pagination currentPage={currentPage} handlerPagination={handlerPagination} totalPortfolio={totalPortfolio} pageSize={pageSize}/>}
    </>
  )
}
export default PortfolioList;