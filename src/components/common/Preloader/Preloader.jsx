import React from 'react';
import style from './Preloader.module.scss'
import preloading from '../../../assets/img/loading.svg';

const Preloader = props => {
  return(
	<img className={style.preloader} src={preloading}/>
  )
}
export default Preloader;