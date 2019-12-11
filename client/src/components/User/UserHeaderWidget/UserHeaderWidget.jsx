import React, {useState} from 'react';
import style from './UserHeaderWidget.module.scss'

const UserHeaderWidget = props => {
  
  const {logout} = props,
	{userEmail, userName, userAva} = props.userData,
	[isOpen, setIsOpen] = useState(false);
  
  
  const handlerDropdown = evt => {
	evt.preventDefault();
	setIsOpen(!isOpen)
  }
  
  return (
	<div className={style.menu}>
	  <div className={style.menuItem}>
		<div className={style.profile} onClick={handlerDropdown}>
		  <img src={`/assets/img/ava/${userAva}`} alt={userName} className={style.profileAva}/>
		</div>
		{isOpen &&
		<div className={style.dropdownMenu}>
		  <div className={style.dropdownMenuHeader}>
			<img src={`/assets/img/ava/${userAva}`} alt={userName} className={`${style.profileAva} ${style.profileAvaBig}`}/>
			<div className={style.profileName}>{userName}</div>
			<div className={style.profileEmail}>{userEmail}</div>
		  </div>
		  <div className={style.dropdownMenuBody}>
			<ul className={style.dropdownAction}>
			  <li className={style.dropdownActionItem}>
				<a href="" onClick={logout} className={style.dropdownActionItemLink}>
				  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
					   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
					   className="feather feather-edit">
					<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
					<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
				  </svg>
				  Изменить профиль
				</a>
			  </li>
			  <li className={style.dropdownActionItem}>
				<a href="" onClick={logout} className={style.dropdownActionItemLink}>
				  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
					   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
					   className="feather feather-log-out">
					<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
					<polyline points="16 17 21 12 16 7"></polyline>
					<line x1="21" y1="12" x2="9" y2="12"></line>
				  </svg>
				  Выйти
				</a>
			  </li>
			</ul>
		  </div>
		</div>
		}
	  </div>
	</div>
  )
}
export default UserHeaderWidget;