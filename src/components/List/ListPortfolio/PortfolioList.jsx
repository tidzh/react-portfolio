import React from 'react';
import Grid from "@material-ui/core/Grid";
import Pagination from "../../common/Pagination/Pagination";
import style from "./PortfolioListItem.module.scss";
import {NavLink} from "react-router-dom";
import Box from "@material-ui/core/Box";

const PortfolioList = props => {
  
  const {portfolioList, pageSize, totalPortfolio, currentPage, handlerPagination, isFetching, setPortfolioLike, isLike, limit} =  props;
  
  const portfolioLists = portfolioList.map((article,index) =>
    <Grid item md={3} key={index}>
      <PortfolioListItem isLike={isLike} index={index} articleItem={article} setPortfolioLike={setPortfolioLike}/>
    </Grid>
  );
  return(
    <>
      <Grid container spacing={3}>
          {isFetching}
          {portfolioLists}
      </Grid>
      {!limit && <Pagination currentPage={currentPage} handlerPagination={handlerPagination} totalPortfolio={totalPortfolio} pageSize={pageSize}/>}
    </>
  )
};
const PortfolioListItem = props => {
  const {articleItem} = props;
  
  return(
    <div className={style.item}>
      <NavLink to={`/portfolio/${articleItem.url}.html`} className={style.link}>
        <div className={style.img}><img src={articleItem.img} alt=""/></div>
        <Box className={style.footer} p={2}>
          <div className={style.name}>{articleItem.title}</div>
          <div className={style.category}>Категория</div>
        </Box>
      </NavLink>
      {/*<FormButton*/}
      {/*disable={isLike.some(id => id === articleItem._id)}*/}
      {/*onClick={()=> setPortfolioLike(articleItem._id, articleItem.like)}>Нравится ({articleItem.like})</FormButton>*/}
    </div>
  )
};
export default PortfolioList;