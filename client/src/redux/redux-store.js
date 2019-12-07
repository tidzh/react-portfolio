import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import menuReducer from "./menu-reducer";
import portfolioReducer from "./portfolio-reducer";
import adminReducer from "./admin-reducer";
import newFeedback from "./feedback-reducer";
import authReducer from "./auth-reducer";
import HomeReducer from "./home-reducer";
import ServicesReducer from "./services-reducer";

let reducers = combineReducers( {
  menu: menuReducer,
  portfolioPage: portfolioReducer,
  adminPage:adminReducer,
  feedbackPage:newFeedback,
  auth: authReducer,
  home:HomeReducer,
  services:ServicesReducer
});


export default createStore(reducers, applyMiddleware(thunk));