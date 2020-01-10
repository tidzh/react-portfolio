import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import {Provider} from "react-redux";
import {MuiThemeProvider} from '@material-ui/core/styles';
import Theme from "./utils/theme";

ReactDOM.render(
  <Provider store={store}>
	<MuiThemeProvider theme={Theme}>
	  <App/>
	</MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
