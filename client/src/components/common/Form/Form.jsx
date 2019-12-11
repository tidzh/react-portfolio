import React from 'react'
import style from '../Form/Form.module.scss'

export const Form = props => {
	const {onSubmit} = props;
    return(
	  <form onSubmit={onSubmit} className={style.form}>
		{props.children}
	  </form>
	)
};

export const renderInput = ({ input, className, type, meta: { touched, error, warning }, ...props }) => {
  
  const hasError =  touched && error;
  
  return (
	<>
	  <input {...input}
			 {...props}
			 type={type}
			 className={`${className} ${hasError ? style.controlError : ''}`}/>
	  { hasError && <div className={style.controlErrorText}>{error}</div> }
	</>
  )
};
export const renderTextArea = ({ input, className, type, meta: { touched, error, warning }, ...props }) => {
  
  const hasError =  touched && error;
  return (
	<>
	  <textarea {...input}
				{...props}
				type={type}
				className={`${className} ${hasError ? style.controlError : ''}`}/>
	  { hasError && <div className={style.controlErrorText}>{error}</div> }
	</>
  )
};