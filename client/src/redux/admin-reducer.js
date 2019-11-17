const initialState = {
  adminSidebar: [
	{
	  "id":1,
	  "name":"Главная",
	  "url":""
	},
	{
	  "id":2,
	  "name":"Портфолио",
	  "url":"portfolio"
	},
	{
	  "id":3,
	  "name":"Меню",
	  "url":"menu"
	},
	{
	  "id":4,
	  "name":"Услуги",
	  "url":"services"
	},
  ]
}

const adminPage = (state = initialState, action) => {
  return state;
}
export default adminPage;