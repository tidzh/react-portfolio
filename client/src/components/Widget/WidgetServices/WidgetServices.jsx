import React from "react";
import WidgetServicesItem from "./WidgetServicesItem";

const WidgetServices = props => {
  
  const servicesList = props.services.map(servicesItem =>
    <WidgetServicesItem key={servicesItem._id} servicesItem={servicesItem}/>
  )
  
  return(
	<div className="row pos-relative">{servicesList}</div>
  )
}
export default WidgetServices