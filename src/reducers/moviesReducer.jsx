import initialState from './initialState';
import {FETCH_MOVIES, RECEIVE_MOVIES} from '../actions/actionTypes';

export default function movies(state = initialState.movies, action) {
  let newState;
  switch (action.type) {
    case FETCH_MOVIES:
      return action;
    case RECEIVE_MOVIES:
      newState = action.movies;
      return newState;
    default:
      return state;
  }
}