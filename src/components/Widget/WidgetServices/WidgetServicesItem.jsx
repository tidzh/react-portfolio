import React from "react";
import Grid from '@material-ui/core/Grid';
import style from "./WidgetServices.module.scss";

const WidgetServicesItem = props => {
  const {name, img, text} = props.servicesItem
  return(
    <Grid item xs={4}>
        <div className={style.servicesFlip}>
          <div className={style.servicesList}>
            <div className={style.servicesListFront} style={{backgroundImage:`url(assets/img/${img})`}}>
              <div className={style.flipContent}>
                <div className={style.flipContentTitle}>{name}</div>
              </div>
            </div>
            <div className={style.servicesListBack}>
              <div className={style.flipContent}>
                <div className={style.servicesListIcon}>
                  <i className="fas fa-paint-brush"></i>
                </div>
                <div className="mt-4">
                  <div className={style.servicesListTitle}>{name}</div>
                  <p className="mt-3">{text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Grid>
  )
}
export default WidgetServicesItem