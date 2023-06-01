import {combineReducers} from 'redux';
import movies from './moviesReducer';
import spinnerloading from './spinnerReducer'

const rootReducer = combineReducers({
    movies,
    spinnerloading
});

export default rootReducer;