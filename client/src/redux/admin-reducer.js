const initialState = {
  adminSidebar: [
	{
	  "id":0,
	  "name":"Сайт",
	  "url":"/"
	},
	{"id":1,
	  "name":"DASHBOARD",
	  "url":"/admin/"
	},
	{
	  "id":2,
	  "name":"Портфолио",
	  "url":"/admin/portfolio",
	},
	{
	  "id":3,
	  "name":"Меню",
	  "url":"/admin/menu"
	},
	{
	  "id":4,
	  "name":"Услуги",
	  "url":"/admin/services"
	},
  ]
}

const adminPage = (state = initialState, action) => {
  return state;
}
export default adminPage;