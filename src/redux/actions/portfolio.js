import {
  ADD_PORTFOLIO,
  SET_PORTFOLIO,
  SET_PORTFOLIO_LIKE,
  SET_PORTFOLIO_SINGLE,
  TOGGLE_IS_FETCHING,
  UPDATE_PORTFOLIO
} from "../../constants/action";
import {portfolioAPI} from "../../utils/api";

export const addPortfolio = () => ({type: ADD_PORTFOLIO}),
  updatePortfolio = (name, value) => ({type: UPDATE_PORTFOLIO, name, value}),
  setPortfolio = data => ({type: SET_PORTFOLIO, data}),
  setPortfolioSingle = portfolioSingle => ({type: SET_PORTFOLIO_SINGLE, portfolioSingle}),
  setPortfolioLike = portfolioId => ({type: SET_PORTFOLIO_LIKE, portfolioId}),
  setFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getPortfolioRequest = (currentPage, limit) =>
  async (dispatch) => {
	dispatch(setFetching(true));
	const data = await portfolioAPI.get(currentPage, limit);
	dispatch(setFetching(false));
	dispatch(setPortfolio(data));
  };
export const setLikePortfolio = (id, likes) =>
  async (dispatch) => {
	portfolioAPI.setLike(id, likes);
	dispatch(setPortfolioLike(id));
  };
export const getPortfolioSingleRequest = url =>
  async (dispatch) => {
	const data = await portfolioAPI.getSingle(url);
	dispatch(setPortfolioSingle(data));
  };