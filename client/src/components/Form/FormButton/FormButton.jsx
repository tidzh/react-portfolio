import React from 'react';
import style from '../FormButton/FormButton.module.scss'

const FormButton = props => {
    const {btnClass, onClick} = props;
    
    let btnClassConver ='';
    
    switch (btnClass) {
	  case 'btn_pink':
	    btnClassConver = style.btn_pink;
	    break;
	  case 'btn_blue':
		btnClassConver = style.btn_blue;
		break;
	  default:
		btnClassConver = style.btn_blue;
	}
	
    return (
	  props.children ? <button onClick={onClick} className={`${style.btn} ${btnClassConver}`}>{props.children}</button> : ''
	)
}
export default FormButton;