import React from "react";
import style from "./Pagination.module.scss";
import Box from "@material-ui/core/Box";

const Pagination = ({totalPortfolio, pageSize, handlerPagination, currentPage}) => {
  
  const pageCount = Math.ceil(totalPortfolio / pageSize);
  
  let paginationArr = [];
  for (let i = 1; i <= pageCount; i++) {
	paginationArr.push(i);
  }
  const pagination = paginationArr.map((paginationItem, index) =>
	<li key={index}
		onClick={(evt) => handlerPagination(paginationItem)}
		className={`${style.item} ${currentPage === paginationItem ? style.item_active : ''}`}>{paginationItem}</li>
  );
  return (
	<Box component='ul' display='flex' mt={5} className={style.root}>{pagination}</Box>
  )
};
export default Pagination