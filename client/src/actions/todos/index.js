import axios from 'axios';

import {
  GET_ALL_TODOS,
  GET_ALL_TODOS_ERROR,
  GET_USER_TODOS,
  GET_USER_TODOS_ERROR
} from '../types';


// export const getAllTodos = () => {
//   return async function (dispatch) { //getting manual access to dispatch *reduxThunk property
//     try {
//       const { data } = await axios.get('/api/todos');
//       dispatch({ type: GET_ALL_TODOS, payload: data });
//       dispatch({ type: INCREMENT });
//     } catch (e) {
//       dispatch({ type: GET_ALL_TODOS_ERROR, payload: e });
//     }
//   }
// };

//REFACTORING THIS CODE TO A MORE STANDARD FORM

export const getAllTodos = () => async dispatch => { //a function that emmidiately returns an asynchronous function
  try {
    const { data } = await axios.get('/api/todos');
    dispatch({ type: GET_ALL_TODOS, payload: data });
  } catch (e) {
    dispatch({
      type: GET_ALL_TODOS_ERROR,
      payload: 'Something went wrong, please refresh the page to try again'
    });
  }
};

//making action creator

export const getUserTodos = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/user/todos', { headers: { 'authorization': localStorage.getItem('token') } });
    dispatch({ type: GET_USER_TODOS, payload: data });
  } catch (e) {
    dispatch({ type: GET_USER_TODOS_ERROR, serverError: e, userError: 'Please refresh the page and try again' });
  }
}
