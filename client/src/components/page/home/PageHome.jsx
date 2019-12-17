import React from 'react';
import PortfolioListContainer from "../../Portfolio/PortfolioList/PortfolioListContainer";
import WidgetResume from "../../Widget/WidgetResume/WidgetResume";
import WidgetServices from "../../Widget/WidgetServices/WidgetServices";
import Heading from "../../common/Heading/Heading";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Hello from "../../Hello/Hello";


const PageHome = props => {
  const {services, skills} = props;
  return (
	<>
	  <Hello/>
	  <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
		<Container>
		  <Heading title={'Мои работы'} subtitle='Портфолио' Tag={'h1'}/>
		  <PortfolioListContainer/>
		</Container>
	  </Box>
	  <Box component="section" pt={8} pb={6}>
		<Container>
		  <Heading title={'Мои услуги'} subtitle='Что я делаю' Tag={'h2'}/>
		  <WidgetServices services={services}/>
		</Container>
	  </Box>
	  <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
		<Container>
		  <Heading title={'Мое резюме'} subtitle='Что я умею' Tag={'h2'}/>
		  <WidgetResume skills={skills}/>
		</Container>
	  </Box>
	</>
  )
}
export default PageHome;