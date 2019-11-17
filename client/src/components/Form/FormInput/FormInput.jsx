import React from 'react';
import style from '../Form.module.scss'

const FormInput = props => {
  
  const {value, id, name, placeholder, type = 'text', required = false, onChange} = props;
  return(
  <input type={type}
		 value={value}
		 id={id}
		 name={name}
		 required={required}
		 placeholder={placeholder}
		 className={style.formControl}
		 onChange={onChange}/>
  )
}
export default FormInput;