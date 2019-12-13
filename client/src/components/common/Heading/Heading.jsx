import React from "react";
import style from './Heading.module.scss'

const Heading = props => {
  
  const {title, subtitle, Tag} = props;
  
  return(
	<div className="text-center">
	  <div className={`uppercase d-inline-block ${style.title}`}>
		<div className={style.subTitle}>{subtitle}</div>
		<Tag className={Tag}>{title}</Tag>
	  </div>
	</div>
  )
}
export default Heading