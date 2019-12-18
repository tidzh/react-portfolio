import React from "react";
import style from './Heading.module.scss'
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Heading = props => {
  
  const {title, subtitle, Tag} = props;
  
  return(
	<Box textAlign="center">
	  <Box display="inline-block" className={`uppercase ${style.title}`}>
		<Box className={style.subTitle} mb={1}>{subtitle}</Box>
		<Typography variant={Tag} component={Tag}>{title}</Typography>
	  </Box>
	</Box>
  )
}
export default Heading