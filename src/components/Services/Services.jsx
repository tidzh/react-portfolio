import React from 'react';
import ServicesList from "./ServicesList/ServicesList";
import LayoutFront from "../pages/_layout/LayoutFront/LayoutFront";

const Services = props => {
  const {servicesData} = props;
  return (
	  <div className="wrapper">
		<h1 className="h1">Список услуг</h1>
		<ServicesList data={servicesData}/>
	  </div>
  )
}
export default Services;