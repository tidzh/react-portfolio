const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO',
      NEW_PORTFOLIO = 'NEW_PORTFOLIO',
      SET_PORTFOLIO ='SET_PORTFOLIO',
      SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
      SET_PORTFOLIO_SINGLE = 'SET_PORTFOLIO_SINGLE',
      TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  portfolio: [],
  pageSize:10,
  currentPage:1,
  totalPortfolio: 0,
  isFetching:false,
  portfolioSingle:null,
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
	  return  {
	    ...state,
		currentPage:action.currentPage
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
	case TOGGLE_IS_FETCHING:
	  return {...state, isFetching: action.isFetching}
	case SET_PORTFOLIO_SINGLE:
	  return {...state, portfolioSingle: action.portfolioSingle}
	default:
	  return state;
  }
}
export const newPortfolioCreator = () => ({type: NEW_PORTFOLIO}),
             updatePortfolioCreator = (name, value) => ({type:UPDATE_PORTFOLIO, name, value}),
             setPortfolio = (portfolios, totalCount) => ({type:SET_PORTFOLIO, portfolios, totalCount}),
             setPortfolioSingle = (portfolioSingle) => ({type:SET_PORTFOLIO_SINGLE, portfolioSingle}),
             setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage}),
             setFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})

export default portfolioReducer;