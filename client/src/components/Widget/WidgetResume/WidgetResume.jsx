import React from "react";
import style from './WidgetResume.module.scss'
import WidgetResumeItem from "./WidgetResumeItem/WidgetResumeItem";
import Grid from "@material-ui/core/Grid";

const WidgetResume = (props) => {
  const {skills} = props;
  
  const skillsResult = skills.map(skillsParent =>
	<Grid item md={6} key={skillsParent._id}>
		<div className={style.title}>{skillsParent.name}</div>
		<div className={style.wrapItemContent}>
		{ skillsParent.elements.map((skillsChild, item) =>
			<WidgetResumeItem key={item} skillsChild={skillsChild}/>
			)}
	  </div>
	  </Grid>
	)
  
  return(
	<Grid container spacing={3}>{skillsResult}</Grid>
  )
}
export default WidgetResume;