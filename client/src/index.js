import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './containers/App';
//folder inside of src/reducers
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// this will take three parameters
const store = createStore(
  // 1st: reducers 
  reducers,
  // 2nd: preloaded state wanted
  //like state.auth to push authentication to when it is needed
  { auth: { authenticated: localStorage.getItem('token') } },
  // 3rd: any middleware
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root'));
