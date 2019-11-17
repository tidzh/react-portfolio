import React from 'react';
import style from '../Form.module.scss'

const FormTextarea = props => {

const {value, className, required, name, textAreaRows, placeholder, onChange} = props;

return (
  <textarea
	value={value}
	name={name}
	rows={textAreaRows}
	className={`${className} ${style.formControl}`}
	placeholder={placeholder}
	onChange={onChange}
	required={required}/>
)

}
export default FormTextarea;