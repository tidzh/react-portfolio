import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import menuReducer from "./menu-reducer";
import portfolioReducer from "./portfolio-reducer";
import serviceReducer from "./service-reducer";
import adminReducer from "./admin-reducer";
import newFeedback from "./feedback-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers( {
  menu: menuReducer,
  portfolioPage: portfolioReducer,
  servicePage:serviceReducer,
  adminPage:adminReducer,
  feedbackPage:newFeedback,
  auth: authReducer
});


export default createStore(reducers, applyMiddleware(thunk));