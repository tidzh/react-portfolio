import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import menuReducer from "./menu-reducer";
import portfolioReducer from "./portfolio-reducer";
import adminReducer from "./admin-reducer";
import newFeedback from "./feedback-reducer";
import authReducer from "./auth-reducer";
import HomeReducer from "./home-reducer";
import ServicesReducer from "./services-reducer";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers( {
  menu: menuReducer,
  portfolioPage: portfolioReducer,
  adminPage:adminReducer,
  feedbackPage:newFeedback,
  auth: authReducer,
  home:HomeReducer,
  services:ServicesReducer,
  form: formReducer
});


export default createStore(reducers, applyMiddleware(thunk));