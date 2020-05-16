//combined reducers and form reducers from redux
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import counterReducer from './counterReducer';
//todos reducer
import todosReducer from './todosReducer';

//manny likes to put form reducers last
export default combineReducers({
    todos: todosReducer,
    counter: counterReducer,
    //pass logic 
    form: formReducer
});
