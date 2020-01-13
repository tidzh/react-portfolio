import React from 'react';
import {Form, renderInput} from "../../../components/common/Form/Form";
import {Field} from "redux-form";
import Button from "@material-ui/core/Button";
import {required} from "../../../utils/validators";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const PageMenu = ({menuData, onSubmit, handleSubmit, handlerDelete}) => {
  
  const menuLists = menuData.map((menuList, index) => (
	<ListItem key={menuList._id}>
	  <ListItemText id={menuList._id}>
		<div><b>Имя:</b> {menuList.name}</div>
		<div><b>URL:</b> {menuList.url}</div>
	  </ListItemText>
	  <ListItemSecondaryAction>
		<IconButton edge="end" aria-label="edit">
		  <EditIcon/>
		</IconButton>
		<IconButton edge="end" aria-label="edit" onClick={handlerDelete.bind(this, menuList._id)}>
		  <DeleteForeverIcon/>
		</IconButton>
	  </ListItemSecondaryAction>
	</ListItem>
  ));
  
  return (
	<>
	  <Typography variant="h4" component="h1" gutterBottom={true}>
		Редактировать меню
	  </Typography>
	  <Box mt={3} bgcolor="bgWhite" pl={2} pr={2} borderRadius={4} boxShadow={1} mb={5}>
		<List>{menuLists}</List>
	  </Box>
	  <Typography variant="h4" component="h2" gutterBottom={true}>
		Добавить новое меню
	  </Typography>
	  <Box mt={3} bgcolor="bgWhite" p={4} borderRadius={4} boxShadow={1}>
		<Form onSubmit={handleSubmit(onSubmit)}>
			  <Field name={'name'}
					 component={renderInput}
					 placeholder='Введите название URL'
					 validate={[required]}
			  />
			<Box mt={4}>
			  <Field name={'url'}
					 component={renderInput}
					 placeholder='Введите URL'
					 validate={[required]}
			  />
			</Box>
			<Box mt={4}>
			  <Button type="submit" variant="contained" color="primary" size="large">Добавить</Button>
			</Box>
		  </Form>
	  </Box>
	</>
  )
};

export default PageMenu;