import * as types from './actionTypes'

export function showSpinner() {
  return {
    type: types.SHOW_LOADER,
    spinnerloading: true,
  }
}

export function hideSpinner() {
  return {
    type: types.HIDE_LOADER,
    spinnerloading: false,
  }
}