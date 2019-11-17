import {combineReducers, createStore} from "redux";
import menuReducer from "./menu-reducer";
import portfolioReducer from "./portfolio-reducer";
import serviceReducer from "./service-reducer";
import adminReducer from "./admin-reducer";
import newFeedback from "./feedback-reducer";

let reducers = combineReducers( {
  menu: menuReducer,
  portfolioPage: portfolioReducer,
  servicePage:serviceReducer,
  adminPage:adminReducer,
  feedbackPage:newFeedback
});

let store = createStore(reducers);


export default store;