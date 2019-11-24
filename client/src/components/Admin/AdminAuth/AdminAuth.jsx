import React from 'react';
import Form from "../../Form/Form";
import style from "../../Form/Form.module.scss";
import style2 from "./AdminAuth.module.scss";
import FormButton from "../../Form/FormButton/FormButton";
import FormInput from "../../Form/FormInput/FormInput";

const AdminAuth = props => {
  const {email,login, isAuth} = props
    return(
	  <div className="wrapper">
	  <h1 className="h1">Панель администратора</h1>
		<div className={style2.wrap}>
	  <Form>
	  <div className={style.form__item}>
		<FormInput type={'text'} placeholder={'Введите Логин'} required={true}/>
	  </div>
		<div className={style.form__item}>
		  <FormButton btnText={'Войти'} btnClass={'btn_pink'} />
		</div>
	  </Form>
		</div>
	  </div>
	)
}
export default AdminAuth;