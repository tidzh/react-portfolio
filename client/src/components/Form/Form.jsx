import React from 'react'
import style from '../Form/Form.module.scss'

const Form = props => {
	const {formOnSubmit} = props;
    return(
	  <form onSubmit={formOnSubmit} className={style.form}>
		{props.children}
	  </form>
	)
}
export default Form