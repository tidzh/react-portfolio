import React from 'react';
import {NavLink} from "react-router-dom";

class ServicesList extends React.Component{
  render() {
	const {data} = this.props;
	let servicesLists = data.map((servicesList) =>
	  <li key={servicesList.id}><NavLink exact to={`/services/${servicesList.id}`}>{servicesList.title}</NavLink></li>
	);
    return(
      <ul>{servicesLists}</ul>
	)
  }
}
export default ServicesList;