import React from "react";
import style from "../WidgetResume.module.scss";

const WidgetResumeItem = props => {
  
  const {skillsChild} = props
  
  return (
	<div className={style.skills}>
	  <div className={style.skillsTitle}>{skillsChild.name}</div>
	  <div className={style.progress}>
		<div className={style.progressBar} style={{width: `${skillsChild.level}%`}}></div>
	  </div>
	</div>
  )
}
export default WidgetResumeItem;