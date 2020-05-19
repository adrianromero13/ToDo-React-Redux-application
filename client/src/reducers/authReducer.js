import { AUTH_USER, AUTH_USER_ERROR } from '../actions/types';


const INITIAL_STATE = {
  authenticated: '',
  authError: ''
};

export default function (state = INITIAL_STATE, action) {
  //switch case statement
  switch (action.type) {
    case AUTH_USER:
      //returns to the user a token and clears all errors present if successful
      return { ...state, authenticated: action.payload, authError: '' };
    case AUTH_USER_ERROR:
      return { ...state, authError: action.payload };
    default:
      return state;
  }
}
