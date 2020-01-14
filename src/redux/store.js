import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducers/app";
import menuReducer from "./reducers/menu";
import portfolioReducer from "./reducers/portfolio";
import adminReducer from "./reducers/admin";
import newFeedback from "./reducers/feedback";
import authReducer from "./reducers/auth";
import homeReducer from "./reducers/home";
import servicesReducer from "./reducers/services";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers,  composeEnhancers(applyMiddleware(thunk)));