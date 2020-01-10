import {ADD_MENU, DELETE_MENU, SET_MENU, UPDATE_MENU} from "../constants/action";
import {menuApi} from "../helpers/api";
import {reset} from "redux-form";

export const addMenu = (name, url) => ({type: ADD_MENU, name, url});
export const updateMenu = (menuName, menuValue, menuItem) =>
  ({type: UPDATE_MENU, name: menuName, value: menuValue, item: menuItem});
export const setMenu = (menu) => ({type: SET_MENU, menu: menu});
export const deleteMenu = id => ({type: DELETE_MENU, id});

export const fetchMenuRequest = () => {
  return (dispatch) => {
	menuApi.set().then(data => {
	  dispatch(setMenu(data));
	})
  }
};
export const sendMenuRequest = (name, url) => {
  return (dispatch) => {
	menuApi.add(name, url).then(data => {
	  dispatch(addMenu(name, url));
	  dispatch(reset('add-menu'));
	})
  }
};
export const deleteMenuRequest = id => {
  return (dispatch) => {
	menuApi.delete(id).then(data => {
	  dispatch(deleteMenu(id))
	})
  }
}