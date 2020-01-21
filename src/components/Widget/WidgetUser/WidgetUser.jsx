import React, { useState } from "react";
import style from "./WidgetUser.module.scss";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EditIcon from "@material-ui/icons/Edit";
import { getImg } from "../../../utils/functionHelper";
import Box from "@material-ui/core/Box";
import { ImageAvatars, BadgeAvatars } from "../../common/Avatars/Avatars";

const WidgetUser = ({ logout, userData: { userEmail, userName, userAva } }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlerDropdown = evt => {
    evt.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className={style.menuItem}>
      <Box className={style.profile} onClick={handlerDropdown}>
        <BadgeAvatars alt={userName} src={getImg(`ava/${userAva}`)} />
      </Box>
      {isOpen && (
        <div className={style.dropdownMenu}>
          <div className={style.dropdownMenuHeader}>
            <Box display="flex" justifyContent="center">
              <ImageAvatars
                alt={userName}
                src={getImg(`ava/${userAva}`)}
                size="large"
              />
            </Box>
            <div className={style.profileName}>{userName}</div>
            <div className={style.profileEmail}>{userEmail}</div>
          </div>
          <div className={style.dropdownMenuBody}>
            <ul className={style.dropdownAction}>
              <li className={style.dropdownActionItem}>
                <a
                  href="/"
                  onClick={logout}
                  className={style.dropdownActionItemLink}
                >
                  <EditIcon />
                  Изменить профиль
                </a>
              </li>
              <li className={style.dropdownActionItem}>
                <a
                  href="/"
                  onClick={logout}
                  className={style.dropdownActionItemLink}
                >
                  <ExitToAppIcon />
                  Выйти
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default WidgetUser;
