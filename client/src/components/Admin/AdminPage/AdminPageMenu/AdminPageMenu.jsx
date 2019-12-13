import React, { useState } from 'react';
import FormButton from "../../../common/Button/FormButton";
import styleForm from "../../../common/Form/Form.module.scss";
import {ADMIN} from "../../../../helpers/lang";
import {Form} from "../../../common/Form/Form";
import {Field} from "redux-form";


const AdminPageMenu = props => {
  
  const [isOpen, setIsOpen] = useState(false),
	    {menuData, menuDataNew, addMenuThunk, addMenuItem, updateMenu} = props;
  
  const handleSubmit = evt => {
	evt.preventDefault();
	addMenuThunk(menuDataNew.name, menuDataNew.url);
  }
  const handleSubmitItem = evt => {
    evt.preventDefault();
	setIsOpen(false)
	addMenuItem();
  }
  const handleInputChange = evt => {
	updateMenu(evt.target.name, evt.target.value, isOpen, evt.target.id);
  }
  
  const handleEditMenuItem = idMenu => setIsOpen(idMenu);
  
  
  
	const menuLists = menuData.map(menuList => {
	  if(isOpen === menuList._id) {
		return <li className="mb-20" key={menuList._id}>
		  <div className="mb-5"><b>ID:</b> {menuList._id}</div>
		  <Form onSubmit ={handleSubmitItem}>
			<div className="mb-5">
			  <b>Имя:</b>
			  <Field required
						 name='name'
						 value={menuList.name}
						 placeholder="Введите название URL"
						 onChange={handleInputChange}/>
			</div>
			<div className="mb-5"><b>URL:</b>
			  <Field required
						 name='url'
						 value={menuList.url}
						 placeholder="Введите URL"
						 onChange={handleInputChange}/>
			</div>
			<FormButton btnClass='btn_pink' onClick={handleEditMenuItem.bind(this,menuList._id)}>{ADMIN.save}</FormButton>
		  </Form>
		</li>
	  } else {
		return <li className="mb-20" key={menuList._id}>
		  <div className="mb-5"><b>ID:</b> {menuList._id}</div>
		  <div className="mb-5"><b>Имя:</b> {menuList.name}</div>
		  <div className="mb-5"><b>URL:</b> {menuList.url}</div>
		  <FormButton btnClass='btn_blue' onClick={handleEditMenuItem.bind(this,menuList._id)}>{ADMIN.edit}</FormButton>
		</li>
	  }
	})
	
	return (
	  <>
		<h1 className="h3">Редактировать меню</h1>
	  <div>
		<ul>{menuLists}</ul>
		<div>
		  <h3 className="h3 mb-20">Добавить URl</h3>
		  <Form onSubmit={handleSubmit}>
			<div className={styleForm.item}>
			  <Field required
						 id='name-new'
						 name='name'
						 placeholder="Введите название URL"
						 value={menuDataNew.name}
						 onChange={handleInputChange}/>
			</div>
			<div className={styleForm.item}>
			  <Field required
						 name='url'
						 id='url-new'
						 placeholder="Введите URL"
						 value={menuDataNew.url}
						 onChange={handleInputChange}/>
			</div>
			<div className={styleForm.item}>
			  <FormButton btnClass="btn_blue">{ADMIN.add}</FormButton>
			</div>
		  </Form>
		</div>
	  </div>
	  </>
	)
}

export default AdminPageMenu;