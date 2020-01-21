import React from "react";
import Link from "@material-ui/core/Link";
import BreadcrumbsWrap from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

const Breadcrumbs = ({ data, dashboard = false }) => {
  const breadcrumb = data.map((breadcrumbItem, index, currentValue) =>
    currentValue.length - 1 === index ? (
      <Typography color="textPrimary" key={index}>
        {breadcrumbItem.name}
      </Typography>
    ) : (
      <Link
        component={NavLink}
        key={index}
        to={breadcrumbItem.url}
        color="inherit"
      >
        {breadcrumbItem.name}
      </Link>
    )
  );

  return (
    <BreadcrumbsWrap separator="›" aria-label="breadcrumb">
      <Link
        component={NavLink}
        to={!dashboard ? "/" : "/admin/"}
        color="inherit"
      >
        {!dashboard ? "Главная" : "Dashboard"}
      </Link>
      {breadcrumb}
    </BreadcrumbsWrap>
  );
};
export default Breadcrumbs;
