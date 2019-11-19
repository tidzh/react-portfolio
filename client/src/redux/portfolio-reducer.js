const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO',
      NEW_PORTFOLIO = 'NEW_PORTFOLIO',
      SET_PORTFOLIO ='SET_PORTFOLIO';

const initialState = {
  portfolio: [
	// {
	//   "id": 1,
	//   "date": "2016-06-09T15:03:23.000Z",
	//   "title": "Проект 1",
	//   "img": 'http://preview.themedemo.co/ika-landing/images/home/main_home.jpg',
	//   "text": "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your redux changes. \n We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich redux through your app and keep state out of the DOM.",
	//    "like": 1
	// },
	// {
	//   "id": 2,
	//   "date": "2016-06-09T15:03:23.000Z",
	//   "title": "Проект 2",
	//   "img": 'http://preview.themedemo.co/ika-landing/images/home/main_home.jpg',
	//   "text": "Quis occaecat duis aliqua reprehenderit excepteur nisi deserunt excepteur elit magna. Magna cillum anim veniam deserunt voluptate occaecat irure fugiat laboris proident. Tempor do magna deserunt cillum laborum cillum ut.\n\nEst sunt cupidatat in deserunt sit aliqua duis. Mollit consequat duis aliquip occaecat pariatur non do eiusmod dolore amet deserunt ullamco. Ea minim tempor exercitation do tempor nostrud dolor minim veniam laboris commodo ex duis. Do nostrud voluptate ullamco consequat anim tempor voluptate incididunt aliqua tempor.\n\nIn irure quis nostrud do. Labore laboris irure culpa reprehenderit pariatur laboris in commodo culpa enim cillum magna. Magna ipsum pariatur sunt in reprehenderit ipsum duis officia voluptate adipisicing ad officia. Duis est sint mollit amet laborum magna non quis nulla ipsum in veniam sit. Amet velit consequat esse esse ea. Ipsum non do ut cillum in adipisicing labore non commodo do laborum sunt.",
	//   "like": 0
	// },
	// {
	//   "id": 3,
	//   "date": "2016-06-09T15:03:23.000Z",
	//   "title": "Проект 3",
	//   "img": 'http://preview.themedemo.co/ika-landing/images/home/main_home.jpg',
	//   "text": "Culpa dolor deserunt veniam irure amet officia excepteur labore nisi labore ad labore laborum aute. Ea irure sit exercitation ex. Aliquip dolore duis ullamco labore qui. Et anim irure laborum quis ipsum. Adipisicing culpa est ea velit veniam dolor nisi. Sit cupidatat velit commodo eu.\n\nUt nulla ut irure cillum irure sint sunt cupidatat tempor laboris incididunt elit occaecat fugiat. Reprehenderit enim cupidatat consectetur pariatur ad pariatur consequat veniam do fugiat Lorem laborum do velit. Nulla aute magna magna nisi officia et. Aute adipisicing eu eiusmod tempor exercitation sint non enim laboris dolor adipisicing.\n\nEa do sint pariatur voluptate ad culpa irure. Cillum pariatur deserunt fugiat elit. Exercitation labore amet deserunt magna. Velit veniam aute officia aliqua ipsum veniam pariatur. Aliquip ullamco fugiat officia non sunt ad consequat ipsum est esse commodo reprehenderit. Ad quis consectetur est exercitation fugiat eiusmod. Laborum reprehenderit esse qui irure.",
	//   "like": 0
	// },
	// {
	//   "id": 4,
	//   "date": "2016-06-09T15:03:23.000Z",
	//   "title": "Проект 4",
	//   "img": 'http://preview.themedemo.co/ika-landing/images/home/main_home.jpg',
	//   "text": "Voluptate est officia pariatur tempor labore consequat consequat consectetur culpa enim. Amet laborum commodo in ullamco magna aliquip. Cupidatat veniam adipisicing labore irure nostrud sunt proident aute in. Sit Lorem consequat cillum enim id excepteur aliqua nostrud sint quis aute est est dolor. Sunt culpa est magna ad qui consequat exercitation. Enim sit ex do cupidatat laborum.\n\nOccaecat do tempor ex in dolor cupidatat do quis laboris anim. Et duis esse pariatur magna ex ipsum ut do ut id cillum. Nostrud fugiat sit minim ea. Nisi nulla sunt et et voluptate. Velit reprehenderit enim nulla mollit dolore excepteur Lorem do Lorem do cillum est qui. Ipsum mollit duis laboris incididunt non sit sunt proident. Aute voluptate id sunt aute proident officia.\n\nEnim ut nulla cillum officia cupidatat eiusmod amet laborum do labore id. Laborum in laboris aliquip anim consectetur magna reprehenderit consequat eiusmod esse Lorem consequat aliqua. Eiusmod voluptate mollit sint consectetur eu deserunt laboris ad et sunt nulla fugiat quis non. Dolor qui do cupidatat proident mollit amet sint pariatur non aliquip enim ex.",
	//   "like": 0
	// },
	// {
	//   "id": 5,
	//   "date": "2016-06-09T15:03:23.000Z",
	//   "title": "Проект 5",
	//   "img": 'http://preview.themedemo.co/ika-landing/images/home/main_home.jpg',
	//   "text": "Ex sunt sunt aliqua reprehenderit aliqua occaecat. Minim anim commodo officia veniam proident aute cillum eu sunt aute nostrud. Laboris fugiat velit ut pariatur occaecat adipisicing pariatur occaecat. Duis sint enim et consectetur quis pariatur laborum excepteur. Ipsum aliquip qui laborum commodo consectetur do velit veniam occaecat. Ad nisi dolor cillum elit magna dolor voluptate ea. Enim in duis ea consequat sunt Lorem aute.\n\nEst elit sunt quis officia reprehenderit do elit commodo eiusmod esse voluptate. Sit ipsum commodo sint voluptate culpa labore elit magna ullamco nostrud. Laboris magna magna anim labore mollit irure voluptate. Aute non magna aliqua aliqua sunt. Velit mollit consectetur aliqua id tempor ut. Tempor cupidatat aliquip excepteur occaecat incididunt nulla Lorem sint.\n\nNon commodo anim deserunt in et aliquip incididunt ut consectetur sunt esse commodo deserunt et. Tempor fugiat laboris cillum laboris labore. Deserunt quis ad do labore amet culpa officia. Esse et officia nostrud tempor occaecat officia anim incididunt amet sunt excepteur Lorem. Aute occaecat magna velit nisi sit anim consequat velit qui pariatur. Esse incididunt id officia aliqua anim ut et.",
	//   "like": 0
	// },
	// {
	//   "id": 6,
	//   "date": "2016-06-09T15:03:23.000Z",
	//   "title": "Проект 6",
	//   "img": 'http://preview.themedemo.co/ika-landing/images/home/main_home.jpg',
	//   "text": "Commodo laborum sit nostrud reprehenderit cupidatat officia laboris. Ipsum minim culpa in enim. Voluptate dolor ea irure nisi incididunt enim magna.\n\nCupidatat quis cillum velit culpa tempor esse irure nostrud ea consectetur officia fugiat irure qui. Enim quis officia do in. Velit veniam ipsum consequat aliqua duis voluptate. Minim nisi ex aute ad.\n\nNisi Lorem ex tempor adipisicing labore. Quis occaecat fugiat pariatur labore culpa cillum laboris. Labore occaecat ut laborum sit ex do sit. Deserunt consectetur elit aute laboris est deserunt officia ullamco sit laboris officia aliquip. Aliqua ut sunt nostrud voluptate excepteur quis incididunt Lorem ut.",
	//   "like": 0
	// },
	// {
	//   "id": 7,
	//   "date": "2016-06-09T15:03:23.000Z",
	//   "title": "Проект 7",
	//   "img": 'http://preview.themedemo.co/ika-landing/images/home/main_home.jpg',
	//   "text": "Commodo laborum sit nostrud reprehenderit cupidatat officia laboris. Ipsum minim culpa in enim." +
	// 	" Voluptate dolor ea irure nisi incididunt enim magna.\n\nCupidatat quis cillum velit culpa tempor esse irure nostrud ea consectetur officia fugiat irure qui. Enim quis officia do in. Velit veniam ipsum consequat aliqua duis voluptate. Minim nisi ex aute ad.\n\nNisi Lorem ex tempor adipisicing labore. Quis occaecat fugiat pariatur labore culpa cillum laboris. Labore occaecat ut laborum sit ex do sit. Deserunt consectetur elit aute laboris est deserunt officia ullamco sit laboris officia aliquip. Aliqua ut sunt nostrud voluptate excepteur quis incididunt Lorem ut.",
	//   "like": 0
	// }
  ],
  newPortfolio: {
	"title": '',
	"text": ''
  }
}


const portfolioReducer = (state = initialState, action) => {
  let stateCopy;
  
  switch (action.type) {
	case SET_PORTFOLIO:
	  
	  return {
	    ...state, portfolio: [...state.portfolio, ...action.portfolios]
	  }
 
	case NEW_PORTFOLIO:
	  
	  const newPortfolioItem = {
		id: state.portfolio.length + 1,
		title: state.newPortfolio.title,
		text: state.newPortfolio.text,
	  }
	  
	  return {
	    ...state,
		newPortfolio: {title: '', text: ''},
		portfolio: [...state.portfolio, {...newPortfolioItem}]
	  };
	case UPDATE_PORTFOLIO:
	  stateCopy = {
	    ...state,
		newPortfolio: {...state.newPortfolio}
	  };
	  stateCopy.newPortfolio[action.name] = action.value;
	  return stateCopy;
	default:
	  return state;
  }
}
export const newPortfolioCreator = () => ({type: NEW_PORTFOLIO}),
             updatePortfolioCreator = (name, value) => ({type:UPDATE_PORTFOLIO, name:name, value:value}),
             setPortfolioCreator = (portfolios) => ({type:SET_PORTFOLIO, portfolios:portfolios});

export default portfolioReducer