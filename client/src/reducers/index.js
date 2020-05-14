//combined reducers and form reducers from redux
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default combinedReducers({
    //pass logic 
    form: formReducer
});
