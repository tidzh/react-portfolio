import React from "react";
import style from './Feedback.module.scss'
import {Field} from "redux-form";
import Heading from "../../components/common/Heading/Heading";
import {email, maxLength, required} from "../../utils/validators";
import {Form, renderInput} from "../../components/common/Form/Form";
import icons from '../../assets/img/icons.svg'
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SnackbarNotification from "../../components/common/Snackbar/SnackbarNotification";


const FeedbackPage = ({onSubmit, handleSubmit, formLoading}) => {
  const maxLength1000 = maxLength(1000);
  return (
	<>
	  <Box component="section" pt={8} pb={8} bgcolor="bgGrey">
		<Container>
		  <Heading title='Обратная связь' subtitle='Связаться со мной' Tag={'h1'}/>
		  <Box mt={5} mb={7}>
			<Grid container spacing={3}>
			  <Grid item xs={4}>
				<div className={style.contactDetailsItem}>
				  <svg className={`icon-like-filled ${style.contactDetailsItemImg}`}>
					<use xlinkHref={`${icons}#icon-phone`}/>
				  </svg>
				  <a href="tel:9507644632" className={style.contactDetailsItemLink}>+7 950 764 46 32</a>
				  <div className={style.contactDetailsItemText}>Позвоните мне</div>
				</div>
			  </Grid>
			  <Grid item xs={4}>
				<div className={style.contactDetailsItem}>
				  <svg className={`icon-like-filled ${style.contactDetailsItemImg}`}>
					<use xlinkHref={`${icons}#icon-envelope`}/>
				  </svg>
				  <a href="mailto:kondakov8@gmail.com" className={style.contactDetailsItemLink}>kondakov8@gmail.com</a>
				  <div className={style.contactDetailsItemText}>Напишите мне</div>
				</div>
			  </Grid>
			  <Grid item xs={4}>
				<div className={style.contactDetailsItem}>
				  <svg className={`icon-like-filled ${style.contactDetailsItemImg}`}>
					<use xlinkHref={`${icons}#icon-like-filled`}/>
				  </svg>
				  <Box display='flex' justifyContent="center">
					<Box mr={1}>
					  <a href="https://vk.com/kondakov_90" target='noopener noreferrer'
						 className={style.contactDetailsItemLink}>VK</a>
					</Box>
					<Box ml={1}>
					  <a href="https://www.instagram.com/iam_kondakov/" target='noopener noreferrer'
						 className={style.contactDetailsItemLink}>Instagram</a>
					</Box>
				  </Box>
				  <div className={style.contactDetailsItemText}>Найдите меня</div>
				</div>
			  </Grid>
			</Grid>
		  </Box>
		</Container>
	  </Box>
	  <Box component="section" pt={8} pb={8}>
		<Container>
		  <Heading title='Напишите мне' subtitle='Связаться со мной' Tag={'h2'}/>
		  <Box maxWidth={1000} m="auto">
			<Form onSubmit={handleSubmit(onSubmit)}>
			  <Grid container spacing={3}>
				<Grid item md={6}>
				  <Field name={'name'}
						 component={renderInput}
						 placeholder='Ваше имя'
						 validate={[required]}/>
				</Grid>
				<Grid item md={6}>
				  <Field name={'email'}
						 component={renderInput}
						 placeholder='Ваш Email'
						 validate={[required, email]}/>
				</Grid>
			  </Grid>
			  <Box mt={4}>
				<Field name={'subject'}
					   component={renderInput}
					   placeholder='Тема сообщения'
					   validate={[required]}/>
			  </Box>
			  <Box mt={4}>
				<Field name={'text'}
					   component={renderInput}
					   placeholder='Ваше сообщение'
					   validate={[required, maxLength1000]}
					   multiline
					   rows="4"/>
			  </Box>
			  <Box mt={4}>
				<Button type="submit" variant="contained" color="secondary" size="large">Отправить</Button>
			  </Box>
			</Form>
			{formLoading &&
			<SnackbarNotification variant="success"
								  vertical="bottom"
								  horizontal="center"
								  status={true}
								  message="Спасибо за ваше сообщение. Я свяжусь с вами в ближайшее время"/>
			  }
		  </Box>
		</Container>
	  </Box>
	</>
  )
};
export default FeedbackPage;