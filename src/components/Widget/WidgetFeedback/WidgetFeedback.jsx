import React from "react";
import style from './WidgetFeedback.module.scss'
import Container from "@material-ui/core/Container";
import {Box} from "@material-ui/core";
import Heading from "../../common/Heading/Heading";


const WidgetFeedback = () => {
  return (
	<Box position="relative">
	  <div className={style.bg}>Feedback</div>
	  <Container>
		<Heading title='Обратная связь' subtitle='Связаться со мной' Tag={'h1'}/>
	  </Container>
	</Box>
  )
};
export default WidgetFeedback