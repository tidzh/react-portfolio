import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducers/app";
import menuReducer from "./reducers/menu";
import portfolioReducer from "./reducers/portfolio";
import feedbackReducer from "./reducers/feedback";
import authReducer from "./reducers/auth";
import widgetReducer from "./reducers/widget";
import servicesReducer from "./reducers/services";
import dashboardReducer from "./reducers/admin";
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers( {
  app: appReducer,
  menu: menuReducer,
  portfolio: portfolioReducer,
  dashboard:dashboardReducer,
  feedback:feedbackReducer,
  auth: authReducer,
  services:servicesReducer,
  widget: widgetReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers,  composeEnhancers(applyMiddleware(thunk)));