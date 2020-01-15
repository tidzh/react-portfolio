import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import IconButton from "@material-ui/core/IconButton";
import {NavLink} from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from "@material-ui/core/Box";
import style from "./EditTable.module.scss";

const EditTable = ({list, match}) => {
  return(
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
			{list.map(list => (
			  <TableRow key={list._id}>
				<TableCell align="left" component="th" scope="row">
				  <img src={`/assets/img/${list.img}`} className={style.img} alt={list.name}/>
				</TableCell>
				<TableCell align="left" component="th" scope="row">{list.name}</TableCell>
				<TableCell align="left" component="th" scope="row">{list.text}</TableCell>
				<TableCell align="right">
				  <IconButton aria-label="edit" component={NavLink} to={`${match.path}/${list.url}.html`}>
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
  )
};
export default EditTable