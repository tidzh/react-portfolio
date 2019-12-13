import React from 'react';
import style from './Section.module.scss'

const Section = props => {
  const {grey} = props;
  return(
    <section className={`${style.root} ${grey && style.rootGrey}`}>
	  {props.children}
	</section>
  )
}
export default Section;