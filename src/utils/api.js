import * as axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  withCredentials: true
});

export const portfolioAPI = {
  get(currentPage = 1, limit = 10) {
    return instance
      .get(`/portfolios?page=${currentPage}&limit=${limit}`)
      .then(response => response.data);
  },
  getSingle(url) {
    return instance.get(`/portfolio/${url}`).then(response => response.data);
  },
  setLike(id, likes) {
    return instance
      .put(`/portfolio/${id}`, { like: likes + 1 })
      .then(response => response.data);
  }
};
export const loginAPI = {
  checkToken() {
    return instance.get(`/checkToken`).then(response => response.data);
  },
  checkLogin(formData) {
    const { email, password, rememberMe } = formData;
    return instance
      .post(`/auth`, { email, password, rememberMe })
      .then(response => response);
  },
  logout() {
    return instance.get(`/logout`).then(response => response.statusText);
  }
};
export const menuApi = {
  set() {
    return instance.get("/menu").then(response => response.data);
  },
  add(formData) {
    const { name, url } = formData;
    return instance
      .post("/menu", { name, url })
      .then(response => response.status);
  },
  delete(id) {
    return instance.delete(`/menu/${id}`).then(response => response.status);
  }
};
export const skillsApi = {
  get() {
    return instance.get("/skills").then(response => response.data);
  }
};
export const servicesApi = {
  get() {
    return instance.get("/services").then(response => response.data);
  },
  getSingle(url) {
    return instance.get(`/service/${url}`).then(response => response.data);
  },
  updateSingle(data) {
    const { url } = data;
    return instance
      .put(`/service/${url}`, { ...data })
      .then(response => response.data);
  }
};
export const feedbackApi = {
  get() {
    return instance.get("/feedback").then(response => response.data);
  },
  add(formData) {
    const { subject, name, email, text, status = false } = formData;
    return instance
      .post("/feedback", { subject, name, email, text, status })
      .then(response => response.status);
  }
};
export const reviewsAPI = {
  get() {
    return instance.get("/reviews").then(response => response.data);
  }
};
