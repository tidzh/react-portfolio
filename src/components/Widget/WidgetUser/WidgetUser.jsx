import React, {useState} from 'react';
import style from './WidgetUser.module.scss'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';

const WidgetUser = props => {
  
  const {logout} = props,
	{userEmail, userName, userAva} = props.userData,
	[isOpen, setIsOpen] = useState(false);
  
  
  const handlerDropdown = evt => {
	evt.preventDefault();
	setIsOpen(!isOpen)
  };
  return (
	<div className={style.menuItem}>
	  <div className={style.profile} onClick={handlerDropdown}>
		<img src={`/assets/img/ava/${userAva}`} alt={userName} className={style.profileAva}/>
	  </div>
	  {isOpen &&
	  <div className={style.dropdownMenu}>
		<div className={style.dropdownMenuHeader}>
		  <img src={`/assets/img/ava/${userAva}`} alt={userName}
			   className={`${style.profileAva} ${style.profileAvaBig}`}/>
		  <div className={style.profileName}>{userName}</div>
		  <div className={style.profileEmail}>{userEmail}</div>
		</div>
		<div className={style.dropdownMenuBody}>
		  <ul className={style.dropdownAction}>
			<li className={style.dropdownActionItem}>
			  <a href="/" onClick={logout} className={style.dropdownActionItemLink}>
				<EditIcon/>
				Изменить профиль
			  </a>
			</li>
			<li className={style.dropdownActionItem}>
			  <a href="/" onClick={logout} className={style.dropdownActionItemLink}>
				<ExitToAppIcon/>
				Выйти
			  </a>
			</li>
		  </ul>
		</div>
	  </div>
	  }
	</div>
  )
};
export default WidgetUser;