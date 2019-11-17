import React from 'react';
import Form from "../../Form/Form";
import style from "../../Form/Form.module.scss";
import style2 from "../../Page/PageLogin/PageLogin.module.scss";
import FormButton from "../../Form/FormButton/FormButton";
import FormInput from "../../Form/FormInput/FormInput";

class PageLogin extends React.Component{
  handleSubmit = (evt) => {
    evt.preventDefault();
	const value = evt.target.elements[0].value
	window.localStorage.setItem('rr_login', value)
}
  render() {
    return(
	  <div className="wrapper">
	  <h1 className="h1">Панель администратора</h1>
		<div className={style2.wrap}>
	  <Form formOnSubmit={this.handleSubmit}>
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
}
export default PageLogin