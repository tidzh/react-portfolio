import React from 'react';
import style from './PortfolioListItem.module.scss';
import stylePag from '../PortfolioPagination/PortfolioPagination.module.scss';
import PorfolioListItem from './PorfolioListItem';


const PortfolioList = props => {
  
  const {portfolioList, pageSize, totalPortfolio, currentPage, handlerPagination, isFetching} =  props,
         pageCount = Math.ceil(totalPortfolio / pageSize);
  
  const portfolioLists = portfolioList.map((article,index) =>
    <li key={index} className={style.portfolioList__item}>
      <PorfolioListItem articleItem={article}/>
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
      <div className="pos-relative">
        {isFetching}
        <ul className={style.portfolioList}>{portfolioLists}</ul>
      </div>
      <ul className={`${stylePag.pagination} d-flex`}>{pagination}</ul>
    </>
  )
}
export default PortfolioList;