import {ADD_MENU, DELETE_MENU, SET_MENU, UPDATE_MENU} from "../../constants/action";
import {menuApi} from "../../utils/api";
import {reset} from "redux-form";

export const addMenu = formData => ({type: ADD_MENU, formData});
export const updateMenu = (menuName, menuValue, menuItem) =>
  ({type: UPDATE_MENU, name: menuName, value: menuValue, item: menuItem});
export const setMenu = (menu) => ({type: SET_MENU, menu: menu});
export const deleteMenu = id => ({type: DELETE_MENU, id});

export const fetchMenuRequest = () =>
  async (dispatch) => {
	const data = await menuApi.set();
	dispatch(setMenu(data));
  };
export const sendMenuRequest = formData =>
  async (dispatch) => {
	menuApi.add(formData);
	dispatch(addMenu(formData));
	dispatch(reset('add-menu'));
	
  };
export const deleteMenuRequest = id =>
  async (dispatch) => {
	menuApi.delete(id);
	dispatch(deleteMenu(id))
  };