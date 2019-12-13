import React from 'react';
import style from './Wrapper.module.scss'

const Wrapper = props => {
  return (
	<div className={style.root}>{props.children}</div>
  )
}
export default Wrapper