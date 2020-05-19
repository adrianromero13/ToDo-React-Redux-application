//combined reducers and form reducers from redux
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import counterReducer from './counterReducer';
//todos reducer
import todosReducer from './todosReducer';
import authReducer from './authReducer';

//manny likes to put form reducers last
export default combineReducers({
  //combined reducers
  auth: authReducer,
  todos: todosReducer,
  counter: counterReducer,
  //pass logic 
  form: formReducer
});
