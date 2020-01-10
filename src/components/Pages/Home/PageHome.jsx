import React from 'react';
import PortfolioListContainer from "../../Portfolio/PortfolioList/PortfolioListContainer";
import WidgetResume from "../../Widget/WidgetResume/WidgetResume";
import WidgetServices from "../../Widget/WidgetServices/WidgetServices";
import Heading from "../../common/Heading/Heading";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Hello from "../../Hello/Hello";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";


const PageHome = props => {
  const {services, skills} = props;
  return (
	<>
	  <Hello/>
	  <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
		<Container>
		  <Heading title={'Мои работы'} subtitle='Портфолио' Tag={'h1'}/>
		  <PortfolioListContainer limit={4}/>
		  <Box display="flex" justifyContent="center" mt={3}>
			<Button variant="contained" size="large" component={NavLink} color="primary" to="/portfolio">
			  Все работы
			</Button>
		  </Box>
		</Container>
	  </Box>
	  <Box component="section" pt={8} pb={6} bgcolor="bgDark" color="white">
		<Container>
		  ggggg
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
};
export default PageHome;