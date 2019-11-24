import React from "react";
import Form from "../../Form/Form";
import FormButton from "../../Form/FormButton/FormButton";
import FormTextarea from "../../Form/FormTextarea/FormTextarea";
import style from '../../Form/Form.module.scss';
import LayoutFront from "../../Layout/LayoutFront/LayoutFront";


const Feedback = props => {
  const {newFeedback, inputChange, submitForm} = props,
	handleInputChange = evt => inputChange(evt.target.name, evt.target.value),
	submitFormHandler = evt => {
	evt.preventDefault();
	  submitForm();
  }
  
  return(
	<div className="wrapper">
	<h1 className="h1 mb-20">Обратная связь</h1>
	  <Form formOnSubmit = {submitFormHandler}>
		<div className={style.form__item}>
		  <FormTextarea name='text' textAreaRows={5} onChange={handleInputChange} value={newFeedback.text} required/>
		</div>
		<div className={style.form__item}>
		  <FormButton btnClass={'btn_pink'}>Отправить</FormButton>
		</div>
	  </Form>
	</div>
  )
}
export default Feedback;