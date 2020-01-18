import React from 'react';
import WidgetServices from "../../components/Widget/WidgetServices/WidgetServices";
import Heading from "../../components/common/Heading/Heading";
import Hello from "../../components/Hello/Hello";
import WidgetFeedback from "../../components/Widget/WidgetFeedback/WidgetFeedback";
import PortfolioListContainer from "../../components/List/ListPortfolio/PortfolioListContainer";
import WidgetResumeContainer from "../../components/Widget/WidgetResume/WidgetResumeContainer";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import WidgetReviewsContainer from "../../components/Widget/WidgetReviews/WidgetReviewsContainer";


const HomePage = ({services}) => {
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
	  <Box component="section" pt={8} pb={8} bgcolor="bgDark" color="white">
		  <WidgetFeedback/>
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
		  <WidgetResumeContainer/>
		</Container>
	  </Box>
		<WidgetReviewsContainer/>
	</>
  )
};
export default HomePage;