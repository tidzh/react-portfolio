import React from 'react'
import style from './Form.module.scss'
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Field} from "redux-form";

const helperTextStyles = makeStyles(theme => ({
  error: {
	"&.MuiFormHelperText-root.Mui-error": {
	  textAlign: 'right'
	}
  }
}));

export const Form = props => {
  const {onSubmit} = props;
  return (
	<form onSubmit={onSubmit}>
	  <FormControl fullWidth>
		{props.children}
	  </FormControl>
	</form>
  )
};

export const renderInput = ({input, placeholder, type, meta: {touched, invalid, error}, ...props}) => {
  
  const helperTestClasses = helperTextStyles();
  
  return (
	<TextField {...input}
			   type={type}
			   {...props}
			   error={touched && invalid}
			   helperText={touched && error}
			   variant="outlined"
			   FormHelperTextProps={{ classes: helperTestClasses }}
			   label={placeholder}
			   fullWidth
			   InputLabelProps={{
				 shrink: true,
			   }}/>
  )
};