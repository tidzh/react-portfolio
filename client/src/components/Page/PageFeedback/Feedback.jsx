import React from "react";
import FormButton from "../../common/Button/FormButton";
import style from './Feedback.module.scss'
import styleForm from "../../common/Form/Form.module.scss";
import styleBtn from "../../common/Button/FormButton.module.scss";
import {Field} from "redux-form";
import Heading from "../../common/Heading/Heading";
import {email, maxLength, required} from "../../../helpers/validators";
import {Form, renderInput, renderTextArea} from "../../common/Form/Form";
import phone from '../../../assets/img/phone.svg'
import mail from '../../../assets/img/mail.svg'
import like from '../../../assets/img/like.svg'
import Section from "../../Layout/Section/Section";


const Feedback = props => {
  const {onSubmit, handleSubmit, formStatus} = props;
  const maxLength1000 = maxLength(1000);
  return (
	<Section grey={true}>
	  <div className="wrapper">
		<Heading title='Обратная связь' subtitle='Связаться со мной' Tag={'h1'}/>
		<div className={style.contactDetail}>
		  <div className="row">
			<div className="col-md-4">
			  <div className={style.contactDetailsItem}>
				<img src={phone} alt="Позвоните мне" className={style.contactDetailsItemImg}/>
				<a href="tel:9507644632" className={style.contactDetailsItemLink}>+7 950 764 46 32</a>
				<div className={style.contactDetailsItemText}>Позвоните мне</div>
			  </div>
			</div>
			<div className="col-md-4">
			  <div className={style.contactDetailsItem}>
				<img src={mail} alt="Напишите мне" className={style.contactDetailsItemImg}/>
				<a href="mailto:kondakov8@gmail.com" className={style.contactDetailsItemLink}>kondakov8@gmail.com</a>
				<div className={style.contactDetailsItemText}>Напишите мне</div>
			  </div>
			</div>
			<div className="col-md-4">
			  <div className={style.contactDetailsItem}>
				<img src={like} alt="Найдите меня" className={style.contactDetailsItemImg}/>
				<div className="d-flex justify-content-center">
				  <a href="https://vk.com/kondakov_90" target='_blank'
					 className={`${style.contactDetailsItemLink} ml-10 mr-10`}>VK</a>
				  <a href="https://www.instagram.com/iam_kondakov/" target='_blank'
					 className={`${style.contactDetailsItemLink} ml-10 mr-10`}>Instagram</a>
				</div>
				<div className={style.contactDetailsItemText}>Найдите меня</div>
			  </div>
			</div>
		  </div>
		</div>
		<div className={formStatus && styleForm.success}>
		  <Form onSubmit={handleSubmit(onSubmit)}>
			<div className={styleForm.itemGrouped}>
			  <div className={`d-flex`}>
				<div className={styleForm.half}>
				  <Field name={'name'}
						 className={`${styleForm.control} ${styleForm.controlBig}`}
						 component={renderInput}
						 placeholder='Ваше имя'
						 validate={[required]}/>
				</div>
				<div className={styleForm.half}>
				  <Field name={'email'}
						 className={`${styleForm.control} ${styleForm.controlBig}`}
						 component={renderInput}
						 placeholder='Ваш Email'
						 validate={[required, email]}/>
				</div>
			  </div>
			</div>
			<div className={`${styleForm.item} ${styleForm.item3}`}>
			  <Field name={'subject'}
					 className={`${styleForm.control} ${styleForm.controlBig}`}
					 component={renderInput}
					 placeholder='Тема сообщения'
					 validate={[required]}/>
			</div>
			<div className={`${styleForm.item} ${styleForm.item3}`}>
			  <Field name={'text'}
					 className={`${styleForm.control} ${styleForm.controlBig}`}
					 component={renderTextArea}
					 placeholder='Ваше сообщение'
					 validate={[required, maxLength1000]}
					 rows={4}
			  />
			</div>
			<div className={`${styleForm.item} ${styleForm.item3} text-center`}>
			  <FormButton btnClass={`${styleBtn.btn} ${styleBtn.btnViolet} ${styleBtn.btnBig}`}>Отправить</FormButton>
			</div>
		  </Form>
		  {formStatus && <div className={styleForm.successText}>Спасибо за ваше сообщение. Я свяжусь с вами в ближайшее время</div>}
		</div>
	  </div>
</Section>
  )
}
export default Feedback;