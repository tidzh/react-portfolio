import React from 'react';
import FormButton from "../../Form/FormButton/FormButton";

const UserHeaderWidget = (props) => {
  
  const {logout} = props;
  
  return (
	<FormButton onClick={logout}>Выйти</FormButton>
  )
}
export default UserHeaderWidget;