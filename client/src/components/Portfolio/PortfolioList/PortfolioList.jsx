import React from 'react';
import style from '../Portfolio.module.scss';
import stylePag from '../PortfolioPagination/PortfolioPagination.module.scss';
import Porfolio from "../Porfolio";


const PortfolioList = props => {
  
  const {portfolioList, pageSize, totalPortfolio, currentPage, handlerPagination} =  props,
         pageCount = Math.ceil(totalPortfolio / pageSize);
  
  const portfolioLists = portfolioList.map((article,index) =>
    <li key={index} className={style.articleList__item}>
      <Porfolio articleItem={article}/>
    </li>
  )
  let paginationArr = [];
  for (let i = 1; i <= pageCount; i++) {
    paginationArr.push(i);
  }
  const pagination = paginationArr.map((paginationItem, index) =>
    <li key={index}
        onClick={(evt)=> handlerPagination(paginationItem)}
        className={`${stylePag.pagination__item} ${currentPage === paginationItem ? stylePag.pagination__item_active : ''}`}>{paginationItem}</li>
  )
  
  return(
    <>
      <ul className={style.articleList}>{portfolioLists}</ul>
      <ul className={`${stylePag.pagination} d-flex`}>{pagination}</ul>
    </>
  )
}
export default PortfolioList;