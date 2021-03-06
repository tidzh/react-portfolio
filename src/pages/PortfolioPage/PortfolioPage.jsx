import React from "react";
import PortfolioListContainer from "../../components/List/ListPortfolio/PortfolioListContainer";
import Container from "@material-ui/core/Container";
import Heading from "../../components/common/Heading/Heading";
import Box from "@material-ui/core/Box";
import Page from "../_layout/Page/Page";

const PortfolioPage = () => {
  return (
    <Page
      pageMeta={{
        title: "Портфолио. Мои работы",
        description: "Бла бла бла"
      }}
    >
      <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
        <Container>
          <Heading title={"Мои работы"} subtitle="Портфолио" Tag={"h1"} />
          <div className="article-wrap">
            <PortfolioListContainer limit={8} pagination={true} />
          </div>
        </Container>
      </Box>
    </Page>
  );
};
export default PortfolioPage;
