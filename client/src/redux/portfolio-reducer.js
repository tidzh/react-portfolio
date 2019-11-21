const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO',
      NEW_PORTFOLIO = 'NEW_PORTFOLIO',
      SET_PORTFOLIO ='SET_PORTFOLIO',
      SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
  portfolio: [],
  pageSize:10,
  currentPage:1,
  totalPortfolio: 22,
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
	    ...state,
		portfolio: [...action.portfolios],
		totalPortfolio: [action.totalCount]
	  }
	case SET_CURRENT_PAGE:
	  let test = {
	    ...state,
		currentPage:action.currentPage
	  }
	  console.log(test)
	  return test
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
             setPortfolioCreator = (portfolios, totalCount) => ({type:SET_PORTFOLIO, portfolios:portfolios, totalCount:totalCount}),
             setCurrentPageCreator = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage:currentPage})

export default portfolioReducer