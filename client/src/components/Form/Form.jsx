import React from 'react'
import style from '../Form/Form.module.scss'

const Form = props => {
	const {onSubmit} = props;
    return(
	  <form onSubmit={onSubmit} className={style.form}>
		{props.children}
	  </form>
	)
}
export default Form