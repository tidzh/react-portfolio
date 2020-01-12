import React from 'react';
import style from './Error404.module.scss'
import img from '../../assets/img/404.svg'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import Page from "../_layout/Page/Page";

const Error404 = () => {
  return (
	<Page pageMeta={{
	  title: "Страница не найдена",
	  description: 'К сожалению cтраница, которую вы искали, не существует.'}}>
	  <Container>
		<Box mt={5}>
		  <Typography align="center" component='div'>
			<img src={img} alt=""/>
			<h1 className={style.title}>404</h1>
			<div className={style.subTitle}>Страница не найдена</div>
			<p className={style.text}>К сожалению cтраница, которую вы искали, не существует.</p>
			<a href="/" className={style.goHome}>Вернуться на главную</a>
		  </Typography>
		</Box>
	  </Container>
	</Page>
  )
};
export default Error404;