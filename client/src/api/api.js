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
  setPortfolioLike(id, likes) {
	return instance.put(`/portfolio/${id}`, {"like": likes + 1}).then(response => response.data)
  }
}
export const loginAPI = {
  checkToken() {
    return instance.get(`/checkToken`).then(response => response.data)
  },
  checkLogin(email, password) {
	return instance.post(`/auth`, {email: email, password:password}).then(response => response.status)
  },
  logout() {
    return instance.get(`/logout`).then(response => response.data)
  }
}
export const menuApi = {
  setMenu() {
    return instance.get('/menu').then(response => response.data)
  }
}
export const skillsApi = {
  getSkill() {
    return instance.get('/skills').then(response => response.data)
  }
}
export const servicesApi = {
  getServices() {
    return instance.get('/services').then(response => response.data)
  }
}