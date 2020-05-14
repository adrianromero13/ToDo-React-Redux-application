//combined reducers and form reducers from redux
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    //pass logic 
    form: formReducer
});
