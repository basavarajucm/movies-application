
import * as types from './actionTypes';



const baseUrl= 'https://api.themoviedb.org/3'
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjY5ZjA4ZTA1OGVjMzM3Zjk3ZTdmYmU5OTllMDQ2MyIsInN1YiI6IjY0NzZjYzExMWY5OGQxMDI4NjE0OTgyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EfSumWvItw-Y_TfrGGLT39am3a5TJXFsqGTLzyQRWDk'
    }
  };

export function receiveMovies(responseData) {
  return {type: types.RECEIVE_MOVIES, movies: responseData};
}

export function fetchMovies(pageNumber) {
  return dispatch => {
    return fetch(`${baseUrl}/movie/popular?language=en-US&page=${pageNumber}`, options)
    .then(response => response.json())
    .then(data => dispatch(receiveMovies(data)))
    .catch(err => console.error(err));
  };
}

export function searchMovies(pageNumber,value){

  return dispatch=>{
     return fetch(`${baseUrl}/search/movie?query=${value}&include_adult=false&language=en-US&page=${pageNumber}`, options)
     .then(response => response.json())
     .then(data => dispatch(receiveMovies(data)))
     .catch(err => console.error(err));
  }

}