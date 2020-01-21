import React from "react";
import style from "./Pagination.module.scss";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";

const Pagination = ({
  totalPortfolio,
  pageSize,
  handlerPagination,
  currentPage
}) => {
  const pageCount = Math.ceil(totalPortfolio / pageSize);

  let paginationArr = [];
  for (let i = 1; i <= pageCount; i++) {
    paginationArr.push(i);
  }
  const pagination = paginationArr.map((paginationItem, index) => {
    console.log(pageCount);
    return (
      <li
        key={index}
        onClick={() => handlerPagination(paginationItem)}
        className={style.item}
      >
        <NavLink
          to={`/portfolio/${paginationItem}`}
          className={clsx(style.href, {
            [style.hrefActive]: paginationItem - 1 === 1 ? false : true
          })}
          activeClassName={style.hrefActive}
        >
          {paginationItem}
        </NavLink>
      </li>
    );
  });
  return (
    <Box component="ul" display="flex" mt={5} className={style.root}>
      {pagination}
    </Box>
  );
};
export default Pagination;

// import React from "react";
// import style from "./Pagination.module.scss";
// import Box from "@material-ui/core/Box";
//
// const Pagination = ({totalPortfolio, pageSize, handlerPagination, currentPage}) => {
//
//   const pageCount = Math.ceil(totalPortfolio / pageSize);
//
//   let paginationArr = [];
//   for (let i = 1; i <= pageCount; i++) {
// 	paginationArr.push(i);
//   }
//   const pagination = paginationArr.map((paginationItem, index) =>
// 	<li key={index}
// 		onClick={(evt) => handlerPagination(paginationItem)}
// 		className={`${style.item} ${currentPage === paginationItem ? style.item_active : ''}`}>{paginationItem}</li>
//   );
//   return (
// 	<Box component='ul' display='flex' mt={5} className={style.root}>{pagination}</Box>
//   )
// };
// export default Pagination
