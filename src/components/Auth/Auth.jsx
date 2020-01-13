import React from 'react';
import style from "./Auth.module.scss";
import {Field} from "redux-form";
import {email, required} from "../../utils/validators";
import {Form, renderInput} from "../common/Form/Form";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Auth = ({onSubmit, handleSubmit, error})=> {
  
  return (
	<Box display="flex" flexGrow={1} justifyContent="center" alignItems="center" className={style.parent}>
	  <div className={style.wrap}>
		<Typography variant="h5" component="h1" gutterBottom={true}>Авторизироваться</Typography>
		<Form onSubmit={handleSubmit(onSubmit)}>
		  <Box mt={2}>
			<Field name={'email'}
				   component={renderInput}
				   placeholder='Введите Email'
				   validate={[required, email]}/>
		  </Box>
		  <Box mt={3}>
			<Field name={'password'}
				   type='password'
				   component={renderInput}
				   placeholder='Введите пароль'
				   validate={[required]}/>
		  </Box>
		  {error && <Box mt={1}><Typography color='error'>{error}</Typography></Box>}
		  <Box mt={1}>
			<Field name={'rememberMe'} type={'checkbox'} component={'input'}/> Запомнить меня
		  </Box>
		  <Box mt={2}>
			<Button type="submit" variant="contained" color="primary" size="large">Войти</Button>
		  </Box>
		</Form>
	  </div>
	</Box>
  )
};
export default Auth;