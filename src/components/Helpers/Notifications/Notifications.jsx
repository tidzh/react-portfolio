import React from "react";
import style from "./Notifications.module.scss";
import icon from "../../../assets/img/icons.svg";

const Notifications = () => {
  return (
    <div className={style.iconBell}>
      <span className={style.iconBellCount}>3</span>
      <svg>
        <use xlinkHref={`${icon}#icon-bell`}></use>
      </svg>
    </div>
  );
};
export default Notifications;
