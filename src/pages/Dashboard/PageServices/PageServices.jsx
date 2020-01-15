import React from "react";
import Typography from "@material-ui/core/Typography";
import EditTable from "../../../components/EditTable/EditTable";

const PageServices = ({services, match}) => {
  return (
	<>
	  <Typography variant="h4" component="h1" gutterBottom={true}>
		Список услуг
	  </Typography>
	  <EditTable list={services} match={match}/>
	</>
  )
};
export default PageServices;