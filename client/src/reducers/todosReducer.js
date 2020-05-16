import {
  GET_ALL_TODOS,
  GET_ALL_TODOS_ERROR,
} from '../actions/types';


//create initial state
const INITIAL_STATE = {
  allTodos: [],
  getAllTodosError: ''
};

//parameters = state, action
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_TODOS:
      return { ...state, allTodos: action.payload, getAllTodosError: '' };
    case GET_ALL_TODOS_ERROR:
      return { ...state, getAllTodosError: action.payload };
    default:
      return state;
  }
}
