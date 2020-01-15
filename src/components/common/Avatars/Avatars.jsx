import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles(theme => ({
  small: {
	width: theme.spacing(3),
	height: theme.spacing(3),
  },
  large: {
	width: theme.spacing(9),
	height: theme.spacing(9),
  },
  badge: {
	backgroundColor: '#44b700',
	color: '#44b700',
	boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
	'&::after': {
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  width: '100%',
	  height: '100%',
	  borderRadius: '50%',
	  border: '1px solid currentColor',
	  content: '""',
	},
  },
}));


export const ImageAvatars = props => {
  const classes = useStyles();
  return <Avatar {...props} className={classes[props.size]}/>;
};

export const BadgeAvatars = props => {
  const classes = useStyles();
  return (
	<Badge
	  classes={{badge:classes.badge}}
	  overlap="circle"
	  anchorOrigin={{
		vertical: 'bottom',
		horizontal: 'right',
	  }}
	  variant="dot">
	  <Avatar {...props} className={classes[props.size]}/>
	</Badge>
  );
};