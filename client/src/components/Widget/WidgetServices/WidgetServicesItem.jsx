import React from "react";
import style from "./WidgetServices.module.scss";

const WidgetServicesItem = props => {
  console.log(props)
  const {name, img, text} = props.servicesItem
  return(
    <>
      <div className={style.servicesItem}>
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
      </div>
    </>
  )
}
export default WidgetServicesItem