//combined reducers and form reducers from redux
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import counterReducer from './counterReducer';
//todos reducer
import todosReducer from './todosReducer';
import authReducer from './authReducer';

import { ADD_TODO } from '../actions/types';

//manny likes to put form reducers last
export default combineReducers({
  //combined reducers
  auth: authReducer,
  todos: todosReducer,
  counter: counterReducer,
  //pass logic 
  form: formReducer.plugin({
    'addTodo': (state, action) => {
      switch (action.type) {
        case ADD_TODO:
          return undefined;
        default:
          return state;
      }
    }
  })
});
