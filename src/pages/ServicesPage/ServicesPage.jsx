import React from "react";
import Page from "../_layout/Page/Page";
import Container from "@material-ui/core/Container";
import Heading from "../../components/common/Heading/Heading";
import WidgetServicesContainer from "../../components/Widget/WidgetServices/WidgetServicesContainer";
import Box from "@material-ui/core/Box";
import WidgetPrices from "../../components/Widget/WidgetPrices/WidgetPrices";
const ServicesPage = () => {
  return (
    <Page
      pageMeta={{
        title: "Список моих услуг по созданию сайта",
        description:
          "Подробнее про услуги: создание сайтов под ключ (квиз-сайт и лэндинг, сайт-визитка, корпоративный сайт-каталог, блог, информационный портал, интернет-магазин), разработка мобильных и адаптивных версий сайтов и редизайн, СЕО-продвижение по Воронежу, Москве, России в Яндексе и Google, SMM-маркетинг."
      }}
    >
      <Box component="section" pt={8} pb={6} bgcolor="bgGrey">
        <Container>
          <Heading title={"Мои услуги"} subtitle="Что я делаю" Tag={"h2"} />
          <WidgetServicesContainer />
        </Container>
      </Box>
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
    </Page>
  );
};
export default ServicesPage;
