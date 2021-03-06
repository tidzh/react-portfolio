import React from "react";
import Heading from "../../components/common/Heading/Heading";
import Hello from "../../components/Hello/Hello";
import WidgetFeedback from "../../components/Widget/WidgetFeedback/WidgetFeedback";
import PortfolioListContainer from "../../components/List/ListPortfolio/PortfolioListContainer";
import WidgetResumeContainer from "../../components/Widget/WidgetResume/WidgetResumeContainer";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import WidgetReviewsContainer from "../../components/Widget/WidgetReviews/WidgetReviewsContainer";
import WidgetServicesContainer from "../../components/Widget/WidgetServices/WidgetServicesContainer";
import Page from "../_layout/Page/Page";
import WidgetPrices from "../../components/Widget/WidgetPrices/WidgetPrices";

const HomePage = () => {
  return (
    <Page
      pageMeta={{
        title: "Разработка сайта в Воронеже - Kondakov.Dev",
        description: "Бла бла бла"
      }}
    >
      <Hello />
      <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
        <Container>
          <Heading title={"Мои работы"} subtitle="Портфолио" Tag={"h1"} />
          <PortfolioListContainer limit={4} pagination={false} />
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              variant="contained"
              size="large"
              component={NavLink}
              color="primary"
              to="/portfolio"
            >
              Все работы
            </Button>
          </Box>
        </Container>
      </Box>
      <Box component="section" pt={8} pb={8} bgcolor="bgDark" color="white">
        <WidgetFeedback />
      </Box>
      <Box component="section" pt={8} pb={6}>
        <Container>
          <Heading title={"Мои услуги"} subtitle="Что я делаю" Tag={"h2"} />
          <WidgetServicesContainer />
        </Container>
      </Box>
      <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
        <Container>
          <Heading title={"Мое резюме"} subtitle="Что я умею" Tag={"h2"} />
          <WidgetResumeContainer />
        </Container>
      </Box>
      <WidgetReviewsContainer />
      <Box component="section" pt={8} pb={8}>
        <Container>
          <Heading
            title={"Низкие цены"}
            subtitle="Цены на создание сайтов"
            Tag={"h2"}
          />
          <WidgetPrices />
        </Container>
      </Box>
      <Box component="section" pt={8} pb={8} bgcolor="bgDark" color="white">
        <WidgetFeedback />
      </Box>
    </Page>
  );
};
export default HomePage;
