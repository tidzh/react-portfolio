import React from 'react';
import style from './Error404.module.scss'
import img from '../../assets/img/404.svg'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import {Helmet} from "react-helmet";

const Error404 = () => {
  return (
    <>
	  <Helmet>
		<title>Страница не найдена</title>
		<meta name="description" content='К сожалению cтраница, которую вы искали, не существует.'/>
	  </Helmet>
	  <Container>
		<Box mt={5}>
		  <Typography align="center" component='div'>
			<img src={img} alt='Страница не найдена'/>
			<h1 className={style.title}>404</h1>
			<div className={style.subTitle}>Страница не найдена</div>
			<p className={style.text}>К сожалению cтраница, которую вы искали, не существует.</p>
			<a href="/" className={style.goHome}>Вернуться на главную</a>
		  </Typography>
		</Box>
	  </Container>
	  </>
  )
};
export default Error404;