import React from "react";
import Typography from "@material-ui/core/Typography";
import EditTable from "../../../components/EditTable/EditTable";

const PagePortfolio = ({ portfolio, match }) => {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom={true}>
        Список работ
      </Typography>
      <EditTable list={portfolio} match={match} />
    </>
  );
};
export default PagePortfolio;
