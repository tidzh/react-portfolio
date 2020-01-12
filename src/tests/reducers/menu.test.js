import {addMenu, deleteMenu} from "../../redux/actions/menu";
import menuReducer from "../../redux/reducers/menu";


const state = {
  menuList: [
	{id: '5dd455243e0253165131ff56', name: 'Портфолио', url: 'portfolio'},
	{id: '5dd455693e0253165131ff57', name: 'Обратная связь', url: 'feedback'},
	{id: '5ded506067d6128708afdbd5', name: 'Услуги', url: 'services'}
  ],
};

it('add menu', () => {
  // Test data
  const action = addMenu('Test', 'test');
  // Action
  const newState = menuReducer(state, action);
  expect(newState.menuList.length).toBe(4);
});

it('menu correct data', () => {
  // Test data
  const action = addMenu('Test', 'test');
  // Action
  const newState = menuReducer(state, action);
  expect(newState.menuList[2].name).toBe('Test')
});

it('delete menu', () => {
  // Test data
  const action = deleteMenu('5dd455243e0253165131ff56');
  // Action
  const newState = menuReducer(state, action);
  expect(newState.menuList.length - 1).toBe(2);
});