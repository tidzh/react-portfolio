import React from 'react';
import style from './Preloader.module.scss'
import CircularProgress from "@material-ui/core/CircularProgress";

const Preloader = () => {
  return <CircularProgress className={style.preloader} size={10}/>
  
};
export default Preloader