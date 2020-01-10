import {
  NEW_PORTFOLIO,
  SET_CURRENT_PAGE,
  SET_PORTFOLIO,
  SET_PORTFOLIO_LIKE, SET_PORTFOLIO_SINGLE, TOGGLE_IS_FETCHING,
  UPDATE_PORTFOLIO
} from "../../utils/constants/action";


const initialState = {
  portfolio: [],
  pageSize: 10,
  currentPage: 1,
  totalPortfolio: 0,
  isFetching: false,
  likeInProgress: [],
  portfolioSingle: null,
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
		totalPortfolio: action.totalCount
	  };
	case SET_CURRENT_PAGE:
	  return {
		...state,
		currentPage: action.currentPage
	  };
	case NEW_PORTFOLIO:
	  const newPortfolioItem = {
		id: state.portfolio.length + 1,
		title: state.newPortfolio.title,
		text: state.newPortfolio.text,
	  };
	  return {
		...state,
		newPortfolio: {title: '', text: ''},
		portfolio: [...state.portfolio, {...newPortfolioItem}]
	  };
	case SET_PORTFOLIO_LIKE:
	  return {
		...state,
		portfolio: state.portfolio.map(portfolio =>
		  portfolio._id === action.portfolioId ? {...portfolio, like: portfolio.like + 1} : portfolio
		),
		likeInProgress: [...state.likeInProgress, action.portfolioId]
	  };
	case UPDATE_PORTFOLIO:
	  stateCopy = {
		...state,
		newPortfolio: {...state.newPortfolio}
	  };
	  stateCopy.newPortfolio[action.name] = action.value;
	  return stateCopy;
	case TOGGLE_IS_FETCHING:
	  return {...state, isFetching: action.isFetching};
	case SET_PORTFOLIO_SINGLE:
	  return {...state, portfolioSingle: action.portfolioSingle};
	default:
	  return state;
  }
};


export default portfolioReducer;