import initialState from './initialState'
import { SHOW_LOADER, HIDE_LOADER } from '../actions/actionTypes'

export default function spinnerloading(
  state = initialState.spinnerloading,
  action
) {
  let newState
  switch (action.type) {
    case SHOW_LOADER:
      newState = action.spinnerloading
      return newState
    case HIDE_LOADER:
      newState = action.spinnerloading
      return newState
    default:
      return state
  }
}