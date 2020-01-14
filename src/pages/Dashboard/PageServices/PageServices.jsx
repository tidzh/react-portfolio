import React from "react";
import style from './PageServices.module.scss';
import Typography from "@material-ui/core/Typography";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from "@material-ui/core/Box";
import {NavLink} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const PageServices = ({services, match}) => {
  return (
	<>
	  <Typography variant="h4" component="h1" gutterBottom={true}>
		Список услуг
	  </Typography>
	  <Box mt={3}>
		<TableContainer component={Paper}>
		  <Table aria-label="simple table">
			<TableHead>
			  <TableRow>
				<TableCell>Изображение</TableCell>
				<TableCell align="left">Заголовок</TableCell>
				<TableCell align="left">Короткое описание</TableCell>
				<TableCell align="right">Действия</TableCell>
			  </TableRow>
			</TableHead>
			<TableBody>
			  {services.map(service => (
				<TableRow key={service._id}>
				  <TableCell align="left" component="th" scope="row">
					<img src={`/assets/img/${service.img}`} className={style.img} alt={service.name}/>
				  </TableCell>
				  <TableCell align="left" component="th" scope="row">{service.name}</TableCell>
				  <TableCell align="left" component="th" scope="row">{service.text}</TableCell>
				  <TableCell align="right">
					<IconButton aria-label="edit" component={NavLink} to={`${match.path}/${service.url}.html`}>
					  <EditIcon/>
					</IconButton>
					<IconButton aria-label="delete">
					  <DeleteIcon/>
					</IconButton>
				  </TableCell>
				</TableRow>
			  ))}
			</TableBody>
		  </Table>
		</TableContainer>
	  </Box>
	</>
  )
};
export default PageServices;