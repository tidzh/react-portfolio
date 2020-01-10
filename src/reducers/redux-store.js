import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import appReducer from "./app";
import menuReducer from "./menu";
import portfolioReducer from "./portfolio";
import adminReducer from "./admin";
import newFeedback from "./feedback";
import authReducer from "./auth";
import homeReducer from "./home";
import servicesReducer from "./services";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers( {
  app: appReducer,
  menu: menuReducer,
  portfolioPage: portfolioReducer,
  adminPage:adminReducer,
  feedbackPage:newFeedback,
  auth: authReducer,
  home:homeReducer,
  services:servicesReducer,
  form: formReducer
});


export default createStore(reducers, applyMiddleware(thunk));