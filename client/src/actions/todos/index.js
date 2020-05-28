import axios from 'axios';

import {
  GET_ALL_TODOS,
  GET_ALL_TODOS_ERROR,
  GET_USER_TODOS,
  GET_USER_TODOS_ERROR,
  UPDATE_TODO_BY_ID_ERROR,
  DELETE_TODO_BY_ID_ERROR,
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
    const { data } = await axios.get('/api/user/todos', { headers: { 'authorization': localStorage.getItem('token')} });
    dispatch({ type: GET_USER_TODOS, payload: data });
  } catch (e) {
    dispatch({ type: GET_USER_TODOS_ERROR, serverError: e, userError: 'Please refresh the page and try again' });
  }
};

//async delcared before dispatch in an async and await function
export const updateTodoCompletedById = (id, completed, text) => async dispatch => {
  try {
    //set up the axios call with authentication by grabbing the token
    await axios.put(`/api/user/todos/${id}`, {text, completed: !completed}, { headers: { 'authorization': localStorage.getItem('token')} });
    const { data } = await axios.get('/api/user/todos', { headers: { 'authorization': localStorage.getItem('token')} });
    dispatch({ type: GET_USER_TODOS, payload: data });
  } catch (e) {
    dispatch({ type: UPDATE_TODO_BY_ID_ERROR, payload: e });
  }
};

export const deleteTodoById = id => async dispatch => {
  try {
    await axios.delete(`/api/user/todos/${id}`, { headers: { 'authorization': localStorage.getItem('token')} });
    const { data } = await axios.get('api/user/todos', { headers: { 'authorization': localStorage.getItem('token')} } );
    dispatch({ type: GET_USER_TODOS, payload: data });
  } catch (e) {
    dispatch({ type: DELETE_TODO_BY_ID_ERROR, payload: e });
  }
};
