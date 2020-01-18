import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Box} from "@material-ui/core";

export const ProgressLine = () => {
  return <LinearProgress/>
};

export const ProgressCircular = () => {
  return (
	<Box display="flex" justifyContent="center" mt={5} mb={5}>
	  <CircularProgress/>
	</Box>
  )
};