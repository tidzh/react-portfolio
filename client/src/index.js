import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.getElementById('root')
);

serviceWorker.unregister();
