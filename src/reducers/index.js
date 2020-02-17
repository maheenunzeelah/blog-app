import {combineReducers} from 'redux';
import PostReducer from './PostListReducer';
import UserHeaderReducer from './UserHeaderReducer';

export default combineReducers({
   posts:PostReducer,
   users:UserHeaderReducer
});