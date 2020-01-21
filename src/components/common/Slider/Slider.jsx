import React from "react";
import SlickSlider from "react-slick";
import "./slider.scss";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const NextArrow = ({ className, onClick, style }) => {
  return (
    <div onClick={onClick} style={{ ...style }} className={className}>
      <NavigateNextIcon />
    </div>
  );
};

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} style={{ ...style }} className={className}>
      <NavigateBeforeIcon />
    </div>
  );
};

const Slider = props => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  const { children, settings } = props,
    sliderSettings = { ...defaultSettings, ...settings };

  return <SlickSlider {...sliderSettings}>{children}</SlickSlider>;
};
export default Slider;
