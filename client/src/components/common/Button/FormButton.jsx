import React from 'react';


const FormButton = props => {
    const {btnClass, onClick, disable} = props;
    
    return (
	  props.children ? <button disabled={disable}
							   onClick={onClick}
							   className={btnClass}>{props.children}</button> : ''
	)
}
export default FormButton;