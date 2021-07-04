import {combineReducers} from "redux"
import moviesReducers from "./moviesReducers"
import authReducers from "./authReducers"



const rootReducer = combineReducers({
  movies: moviesReducers,
  user: authReducers
  
});

export default rootReducer;