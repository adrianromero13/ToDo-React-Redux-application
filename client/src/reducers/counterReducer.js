import { INCREMENT, DECREMENT } from '../actions/types';

export default function (state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      // let newState = state -1; // if you want condition to not have state less than 0
      // isFinite(newState <0) {
      //   return 0;
      // }
      return state - 1;
    default:
      return state;
  }
};
