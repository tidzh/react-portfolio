import React from 'react';
import FormButton from "../../../common/FormButton/FormButton";
import {ADMIN} from "../../../../lang";
import style from './AdminPagePortfolio.module.scss'
import styleForm from "../../../common/Form/Form.module.scss";
import {Form} from "../../../common/Form/Form";
import {Field} from "redux-form";

const AdminPagePortfolio = props => {
  const {portfolioData, portfolioDataNew, addPortfolio, updatePortfolio} = props;
  
  const portfolios = portfolioData.map(portfolio =>
  <li className='mb-20 portfolio__item' key={portfolio.id}>
	<div className='h4'>{portfolio.title}</div>
	<div className={style.portfolioItem}>{portfolio.text}</div>
	<div>Колличество комментариев: {portfolio.comments !== undefined ? portfolio.comments.length : 0}</div>
  </li>)
  
  
  const handleChangeInput = evt => updatePortfolio(evt.target.name, evt.target.value);
  
  const handleOnSubmit = evt => {
	evt.preventDefault();
	addPortfolio();
  }
  
  return(
	<React.Fragment>
	  <h1 className="h1">Редактировать портфолио</h1>
	  <ul className={style.wrap}>{portfolios}</ul>
	  <h2 className='h3 mb-20'>Добавить новый проект</h2>
	  <div className={style.add}>
	  <Form formOnSubmit={handleOnSubmit}>
		<div className={styleForm.item}>
		<Field name='title' onChange={handleChangeInput} required placeholder='Название проекта' value={portfolioDataNew.title}/>
		</div>
		<div className={styleForm.item}>
		  <Field name='text' onChange={handleChangeInput} placeholder='Описание проекта' value={portfolioDataNew.text}/>
		</div>
		<div className={styleForm.form__item}>
		  <FormButton>{ADMIN.add}</FormButton>
		</div>
	  </Form>
	  </div>
	</React.Fragment>
  )
}
export default AdminPagePortfolio;