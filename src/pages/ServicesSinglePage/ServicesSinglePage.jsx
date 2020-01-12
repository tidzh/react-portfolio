import React from "react";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import style from './ServicesSingle.module.scss'
import Box from "@material-ui/core/Box";
import {NavLink} from "react-router-dom";
import {Field} from "redux-form";
import {Form, renderInput} from "../../components/common/Form/Form";
import {email, maxLength, required} from "../../utils/validators";
import Button from "@material-ui/core/Button";

const ServicesSinglePage = props => {
  const {sidebar, single} = props,
	{name, img, textFull} = single,
	maxLength1000 = maxLength(1000);
  
  return (
	<>
	  <Box mb={5} className={style.top}>
		<Container>
		  <Typography variant="h1" component="h2" gutterBottom={true}>
			{name}
		  </Typography>
		</Container>
	  </Box>
	  <Container>
		<Grid container spacing={2}>
		  <Grid item md={3}>
			<aside>
			  <Typography variant="h6" component="div" gutterBottom={true}>
				Другие услуги
			  </Typography>
			  <ul className={style.list}>
				{sidebar.map((list, item) =>
				  <li key={item} className={style.listItem}>
					<NavLink
					  to={`/services/${list.url}.html`}
					  className={style.listItemLink}
					  activeClassName={style.listItemActive}>{list.name}</NavLink>
				  </li>
				)}
			  </ul>
			</aside>
		  </Grid>
		  <Grid item md={9}>
			<Box ml={6}>
			  <img src={`/assets/img/${img}`} alt="" className={style.img}/>
			  <Box className={style.content} p={6} dangerouslySetInnerHTML={{ __html: textFull }}/>
			  <Box mt={5}>
				<Typography variant="h2" component="h6" gutterBottom={true}>
				  Хотите {name.toLowerCase()}? Напишите мне
				</Typography>
				<Box mt={5}>
				  <Form>
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
				</Box>
			  </Box>
			</Box>
		  </Grid>
		</Grid>
	  </Container>
	</>
  )
};
export default ServicesSinglePage;