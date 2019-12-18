import {portfolioAPI} from "../api/api";

const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO',
  NEW_PORTFOLIO = 'NEW_PORTFOLIO',
  SET_PORTFOLIO = 'SET_PORTFOLIO',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_PORTFOLIO_SINGLE = 'SET_PORTFOLIO_SINGLE',
  SET_PORTFOLIO_LIKE = 'SET_PORTFOLIO_LIKE',
  TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
	  }
	case SET_CURRENT_PAGE:
	  return {
		...state,
		currentPage: action.currentPage
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
	case SET_PORTFOLIO_LIKE:
	  return {
		...state,
		portfolio: state.portfolio.map(portfolio =>
		  portfolio._id === action.portfolioId ? {...portfolio, like: portfolio.like + 1} : portfolio
		),
		likeInProgress: [...state.likeInProgress, action.portfolioId]
	  }
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
  updatePortfolioCreator = (name, value) => ({type: UPDATE_PORTFOLIO, name, value}),
  setPortfolio = (portfolios, totalCount) => ({type: SET_PORTFOLIO, portfolios, totalCount}),
  setPortfolioSingle = (portfolioSingle) => ({type: SET_PORTFOLIO_SINGLE, portfolioSingle}),
  setPortfolioLike = portfolioId => ({type: SET_PORTFOLIO_LIKE, portfolioId}),
  setFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getPortfolio = (currentPage, limit) => {
 return (dispatch) => {
	dispatch(setFetching(true));
	portfolioAPI.getPortfolio(currentPage, limit).then(data => {
	  dispatch(setFetching(false));
	  dispatch(setPortfolio(data.items, data.totalCount));
	});
  }
}
export const setLikePortfolio = (id,likes) => {
  return (dispatch) => {
	portfolioAPI.setPortfolioLike(id,likes).then(() => {
	  dispatch(setPortfolioLike(id));
	});
  }
}
export const getPortfolioSingle = (url) => {
  return (dispatch) => {
	portfolioAPI.getPortfolioSingle(url).then(data => {
	  dispatch(setPortfolioSingle(data));
	});
  }
}

export default portfolioReducer;