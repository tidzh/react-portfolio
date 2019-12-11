import React from "react";

const Heading = props => {
  
  const {title, subtitle, Tag} = props;
  
  return(
	<div className="text-center">
	  <div className="uppercase section-title d-inline-block">
		<div className="sub-title">{subtitle}</div>
		<Tag className={Tag}>{title}</Tag>
	  </div>
	</div>
  )
}
export default Heading