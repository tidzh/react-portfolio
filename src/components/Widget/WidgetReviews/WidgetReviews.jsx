import React from "react";
import style from "./WidgetReviews.module.scss";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import Heading from "../../common/Heading/Heading";
import Slider from "../../common/Slider/Slider";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

const WidgetReviews = ({ reviews }) => {
  const settings = {
    customPaging: i => (
      <img
        src={require(`../../../assets/img/review-${i + 1}.jpg`)}
        alt={`Отзыв ${i + 1}`}
      />
    ),
    dotsClass: "slick-dots slick-review",
    autoplay: true,
    arrows: false
  };

  const reviewsList = reviews.map(review => (
    <Box component="div" align="center" mb={5} key={review._id}>
      <p className={style.text}>“{review.text}”</p>
      <Box mt={3} mb={3} className={style.quote}>
        <FormatQuoteIcon />
      </Box>
      <Box>{review.name}</Box>
    </Box>
  ));

  return (
    <Box
      component="section"
      pt={8}
      pb={14}
      color="white"
      className={style.bg}
      position="relative"
    >
      <Container>
        <Heading title="Отзывы" subtitle="Что говорят мои клиенты" Tag={"h1"} />
        <Box maxWidth={700} mx="auto">
          <Slider settings={settings}>{reviewsList}</Slider>
        </Box>
      </Container>
    </Box>
  );
};
export default WidgetReviews;
