import React from 'react';
import HeaderContainer from "../Header/HeaderContainer";
import Footer from "../Footer/Footer";
import {Helmet} from "react-helmet";

const Page = props => {
  const {children, pageMeta = ''} = props;
  return (
	<>
	  <Helmet>
		<title>{pageMeta.title}</title>
		<meta name="description" content={pageMeta.description}/>
	  </Helmet>
	  <HeaderContainer/>
	  <main id="main">
		{children}
	  </main>
	  <Footer/>
	</>
  )
};
export default Page;