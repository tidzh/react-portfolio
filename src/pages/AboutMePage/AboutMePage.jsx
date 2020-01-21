import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../_layout/Page/Page";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Heading from "../../components/common/Heading/Heading";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import CakeRoundedIcon from "@material-ui/icons/CakeRounded";
import LocationCityRoundedIcon from "@material-ui/icons/LocationCityRounded";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import HttpRoundedIcon from "@material-ui/icons/HttpRounded";
import WidgetResumeContainer from "../../components/Widget/WidgetResume/WidgetResumeContainer";
import WidgetReviewsContainer from "../../components/Widget/WidgetReviews/WidgetReviewsContainer";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "30px",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));

const AboutMePage = () => {
  const classes = useStyles();
  return (
    <Page
      pageMeta={{
        title: "Обо мне",
        description: "Бла бла бла"
      }}
    >
      <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
        <Container>
          <Heading
            title={"Обо мне"}
            subtitle="Давайте знакомиться"
            Tag={"h1"}
          />
          <Typography align="center">
            Здравствуй! Меня зовут Кондаков Александр. Я веб-разработчик, и я
            очень увлечен и предан своей работе. Имея 7-летний опыт работы в
            качестве профессионального веб-разработчика, я приобрел навыки и
            знания, необходимые для успеха вашего проекта.
          </Typography>
          <div className={classes.root}>
            <Chip
              icon={<CakeRoundedIcon fontSize="small" />}
              label="29 лет"
              color="primary"
            />
            <Chip
              icon={<LocationCityRoundedIcon fontSize="small" />}
              label="Воронеж"
              color="primary"
            />
            <Chip
              icon={<SchoolRoundedIcon fontSize="small" />}
              label="ВГАСУ"
              color="primary"
            />
            <Chip
              icon={<HttpRoundedIcon fontSize="small" />}
              label="Web Development"
              color="primary"
            />
          </div>
        </Container>
      </Box>
      <Box component="section" pt={8} pb={8}>
        <Container>
          <Heading title={"Мое резюме"} subtitle="Что я умею" Tag={"h2"} />
          <WidgetResumeContainer />
        </Container>
      </Box>
      <WidgetReviewsContainer />
    </Page>
  );
};
export default AboutMePage;
