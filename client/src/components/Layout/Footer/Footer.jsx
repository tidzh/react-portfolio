import React from 'react';
import style from './Footer.module.scss'

const Footer = () => {
    return(
      <footer className={style.root}>
		<div className="wrapper">
		  © {new Date().getFullYear()} Kondakov Alex | All Right Reserved
		</div>
	  </footer>
	)
}
export default Footer