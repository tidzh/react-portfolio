import {
  NEW_PORTFOLIO,
  SET_PORTFOLIO,
  SET_PORTFOLIO_LIKE,
  SET_PORTFOLIO_SINGLE, TOGGLE_IS_FETCHING,
  UPDATE_PORTFOLIO
} from "../../utils/constants/action";
import {portfolioAPI} from "../../utils/api";

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
};
export const setLikePortfolio = (id,likes) => {
  return (dispatch) => {
	portfolioAPI.setPortfolioLike(id,likes).then(() => {
	  dispatch(setPortfolioLike(id));
	});
  }
};
export const getPortfolioSingleRequest = url => {
  return (dispatch) => {
	portfolioAPI.getPortfolioSingle(url).then(data => {
	  dispatch(setPortfolioSingle(data));
	});
  }
};