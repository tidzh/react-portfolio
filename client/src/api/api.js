import * as axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

export const portfolioAPI = {
  getPortfolio(currentPage = 1) {
	return instance.get(`/portfolios?page=${currentPage}`).then(response => response.data)
  },
  getPortfolioSingle(url) {
    return instance.get(`/portfolio/${url}`).then(response => response.data)
  },
  handlerPagination(pageNumber = 1) {
	return instance.get(`/portfolios?page=${pageNumber}`).then(response => response.data)
  },
  setPortfolioLike(id, likes) {
	return instance.put(`/portfolio/${id}`, {"like": likes + 1}).then(response => response.data)
  }
}
export const loginAPI = {
  checkToken() {
    return instance.get(`/checkToken`).then(response => response.status)
  },
  checkLogin(email, password) {
	return instance.post(`/auth`, {email: email, password:password}).then(response => response.status)
  }
}