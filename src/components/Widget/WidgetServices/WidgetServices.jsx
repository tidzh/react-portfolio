import React from "react";
import Grid from '@material-ui/core/Grid';
import style from "./WidgetServices.module.scss";
import {NavLink} from "react-router-dom";

const WidgetServicesItem = ({servicesItem: {name, img, text, url}}) => {
  return (
	<Grid item xs={12} sm={6} md={4}>
	  <div className={style.servicesFlip}>
		<div className={style.servicesList}>
		  <div className={style.servicesListFront} style={{backgroundImage: `url(/assets/img/${img})`}}>
			<div className={style.flipContent}>
			  <div className={style.flipContentTitle}>{name}</div>
			</div>
		  </div>
		  <div className={style.servicesListBack}>
			<div className={style.flipContent}>
			  <div className={style.servicesListIcon}>
				<i className="fas fa-paint-brush"/>
			  </div>
			  <div className="mt-4">
				<div className={style.servicesListTitle}>{name}</div>
				<p className="mt-3">{text}</p>
			  </div>
			</div>
		  </div>
		  <NavLink to={`/services/${url}.html`} className={style.link}>{name}</NavLink>
		</div>
	  </div>
	</Grid>
  )
};
const WidgetServices = ({services}) => {
  
  const servicesList = services.map(servicesItem =>
	<WidgetServicesItem key={servicesItem._id} servicesItem={servicesItem}/>
  );
  return <Grid container spacing={3}>{servicesList}</Grid>
};
export default WidgetServices