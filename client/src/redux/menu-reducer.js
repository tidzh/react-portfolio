const UPDATE_MENU = 'UPDATE-MENU',
      ADD_MENU = 'ADD-MENU',
      ADD_MENU_ITEM = 'ADD-MENU-ITEM',
      UPDATE_MENU_STATUS = 'UPDATE-MENU-STATUS',
      SET_MENU='SET-MENU';

const initialState = {
  menuList: [
	// {
	//   "id":1,
	//   "name":"Главная",
	//   "url":"/"
	// },
	// {
	//   "id":2,
	//   "name":"Портфолио",
	//   "url":"/portfolio"
	// },
	// {
	//   "id":3,
	//   "name":"Обратная связь",
	//   "url":"/feedback"
	// },
	// {
	//   "id":4,
	//   "name":"Услуги",
	//   "url":"/services"
	// },
	// {
	//   "id":5,
	//   "name":"Войти",
	//   "url":"/login"
	// }
  ],
  menuNew: {
	"name":"",
	"url":""
  },
  isOpen:true
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
	case SET_MENU:
	  return {
	    ...state,
		menuList:[...state.menuList, ...action.menu]
	  }
	  
	case ADD_MENU:
	  const newMenu = {
		id: state.menuList.length + 1,
		name: state.menuNew.name,
		url: state.menuNew.url
	  }
	  return {
	    ...state,
		menuNew: {name: '', url: ''},
		menuList:[...state.menuList, {...newMenu}]
	  }
	case ADD_MENU_ITEM:
	  return  {...state};
	case UPDATE_MENU:
	  let stateCopy = {...state};
	  if (action.item !== false) {
	    //stateCopy.menuList = [...state.menuList]
		stateCopy.menuList[action.item - 1][action.name] = action.value;
	  } else {
		stateCopy.menuNew = {...state.menuNew};
		stateCopy.menuNew[action.name] = action.value
	  }
	  console.log(stateCopy)
	  return stateCopy;
	case UPDATE_MENU_STATUS:
	  return {...state, isOpen: !state.isOpen}
	default:
	  return state;
	  
  }
}
export const addMenuCreator = () => ({type: ADD_MENU}),
             addMenuItemCreator = () => ({type: ADD_MENU_ITEM}),
             updateMenuCreator = (menuName, menuValue, menuItem) =>
  ({type: UPDATE_MENU, name: menuName, value: menuValue, item: menuItem}),
            updateMenuStatus = () => ({type: UPDATE_MENU_STATUS}),
            setMenu = (menu) => ({type: SET_MENU, menu:menu});

export default menuReducer;