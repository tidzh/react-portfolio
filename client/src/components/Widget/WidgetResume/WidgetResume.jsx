import React from "react";
import style from './WidgetResume.module.scss'
import WidgetResumeItem from "./WidgetResumeItem/WidgetResumeItem";
const WidgetResume = (props) => {
  const {skills} = props;
  
  const skillsResult = skills.map(skillsParent =>
	  <div key={skillsParent._id} className={style.wrapItem}>
		<div className={style.title}>{skillsParent.name}</div>
		<div className={style.wrapItemContent}>
		{ skillsParent.elements.map((skillsChild, item) =>
			<WidgetResumeItem key={item} skillsChild={skillsChild}/>
			)}
	  </div>
	  </div>
	)
  
  return(<div className={style.wrap}> {skillsResult}</div>)
}
export default WidgetResume;