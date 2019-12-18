import React from "react";
import WidgetServicesItem from "./WidgetServicesItem";
import Grid from '@material-ui/core/Grid';

const WidgetServices = props => {
  
  const servicesList = props.services.map(servicesItem =>
    <WidgetServicesItem key={servicesItem._id} servicesItem={servicesItem}/>
  )
  
  return(
    <Grid container spacing={3}>{servicesList}</Grid>
  )
}
export default WidgetServices