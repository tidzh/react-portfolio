import {ADD_MENU, DELETE_MENU, SET_MENU, UPDATE_MENU} from "../../constants/action";

const initialState = {
  menuList: [],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
	case SET_MENU:
	  return {
		...state,
		menuList: [...action.menu]
	  };
	case ADD_MENU:
	  return {
		...state,
		menuList: [...state.menuList, {...action.formData}]
	  };
	case UPDATE_MENU:
	  let stateCopy = {...state};
	  if (action.item !== false) {
		stateCopy.menuList[action.item - 1][action.name] = action.value;
	  } else {
		stateCopy.menuNew = {...state.menuNew};
		stateCopy.menuNew[action.name] = action.value
	  }
	  return stateCopy;
	case DELETE_MENU:
	  return {...state, menuList: state.menuList.filter(el => el._id !== action.id)
	  };
	default:
	  return state;
	
  }
};

export default menuReducer;