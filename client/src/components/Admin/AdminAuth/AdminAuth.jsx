import React from 'react';
import Form from "../../Form/Form";
import style from "./AdminAuth.module.scss";
import styleForm from "../../Form/Form.module.scss";
import FormButton from "../../Form/FormButton/FormButton";
import FormInput from "../../Form/FormInput/FormInput";

const AdminAuth = props => {
  const {onSubmit, onChange, email, password, error} = props
  
  return (
	<>
	  <div className={`d-flex ${style.parent}`}>
		<div className={style.wrap}>
		<h1 className="h3 mb-20">Авторизироваться</h1>
		<Form onSubmit={onSubmit}>
		  <div className={styleForm.form__item}>
			<FormInput name='email' type='text' onChange={onChange} value={email} placeholder='Введите Email'
					   required={true}/>
		  </div>
		  <div className={styleForm.form__item}>
			<FormInput name='password' type='password' onChange={onChange} value={password} placeholder='Введите пароль'
					   required={true}/>
		  </div>
		  {error && <div className={styleForm.form__item}>Неверный логин или пароль</div>}
		  <div className={styleForm.form__item}>
			<FormButton btnClass={'btn_blue'}>Войти</FormButton>
		  </div>
		</Form>
		</div>
	  </div>
	</>
  )
}
export default AdminAuth;