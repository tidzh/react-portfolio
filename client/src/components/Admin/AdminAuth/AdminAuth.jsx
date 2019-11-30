import React from 'react';
import Form from "../../Form/Form";
import style from "../../Form/Form.module.scss";
import style2 from "./AdminAuth.module.scss";
import FormButton from "../../Form/FormButton/FormButton";
import FormInput from "../../Form/FormInput/FormInput";

const AdminAuth = props => {
  const {onSubmit, onChange, email, password, error} = props
  
    return(
      <>
	  <h1 className="h1">Авторизироваться</h1>
		<div className={style2.wrap}>
	  <Form onSubmit={onSubmit}>
	  <div className={style.form__item}>
		<FormInput name='email' type='text' onChange={onChange} value={email} placeholder='Введите Email' required={true}/>
	  </div>
		<div className={style.form__item}>
		<FormInput name='password' type='password' onChange={onChange} value={password} placeholder='Введите пароль' required={true}/>
	  </div>
		{error && <p>Неверный логин или пароль</p>}
		<div className={style.form__item}>
		  <FormButton btnClass={'btn_blue'}>Войти</FormButton>
		</div>
	  </Form>
		</div>
	</>
	)
}
export default AdminAuth;