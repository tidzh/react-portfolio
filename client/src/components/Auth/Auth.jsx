import React from 'react';
import style from "./Auth.module.scss";
import styleForm from "../../components/common/Form/Form.module.scss";
import FormButton from "../common/FormButton/FormButton";
import {Field} from "redux-form";
import styleBtn from '../common/FormButton/FormButton.module.scss'
import {email, required} from "../../helpers/validators";
import {Form, renderInput} from "../common/Form/Form";

const Auth = props => {
 const {onSubmit, handleSubmit, submitting,pristine} = props;
 
  return (
	<>
	  <div className={`d-flex ${style.parent}`}>
		<div className={style.wrap}>
		<h1 className="h3 mb-20">Авторизироваться</h1>
		  <Form onSubmit={handleSubmit(onSubmit)}>
		  <div className={styleForm.item}>
			<Field name={'email'}
				   className={styleForm.control}
				   component={renderInput}
				   placeholder='Введите Email'
				   validate={[required, email]}/>
		  </div>
		  <div className={styleForm.item}>
			<Field name={'password'}
				   type='password'
				   className={styleForm.control}
				   component={renderInput}
				   placeholder='Введите пароль'
				   validate={[required]}/>
		  </div>
		  <div className={styleForm.item}>
			<Field name={'rememberMe'} type={'checkbox'} component={'input'}/> Запомнить меня
		  </div>
		  <div className={styleForm.item}>
			<button className={`${styleBtn.btn} ${styleBtn.btnBlue}`} type="submit">Войти</button>
		  </div>
		</Form>
		</div>
	  </div>
	</>
  )
}
export default Auth;