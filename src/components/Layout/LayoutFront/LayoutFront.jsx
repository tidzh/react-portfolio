import React from 'react';
import HeaderContainer from "../Header/HeaderContainer";
import Footer from "../Footer/Footer";

const  LayoutFront = props =>{
	return (
	  <>
		<HeaderContainer/>
		<main id="main">
		  {props.children}
		</main>
		<Footer/>
	  </>
	)
  }
export default LayoutFront;