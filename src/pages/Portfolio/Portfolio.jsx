import React from "react";
import PortfolioListContainer from "../../components/Portfolio/PortfolioList/PortfolioListContainer";
import Container from "@material-ui/core/Container";
import Heading from "../../components/common/Heading/Heading";
import Box from "@material-ui/core/Box";
import Page from "../_layout/Page/Page";

const Portfolio = () => {
  return (
	<Page pageMeta={{
	  title: "Портфолио. Мои работы",
	  description: 'Бла бла бла'}}>
	  <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
		<Container>
		  <Heading title={'Мои работы'} subtitle='Портфолио' Tag={'h1'}/>
		  <div className="article-wrap">
			<PortfolioListContainer/>
		  </div>
		</Container>
	  </Box>
	</Page>
  )
};
export default Portfolio;