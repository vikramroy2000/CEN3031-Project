import { combineReducers } from 'redux';
import posts from './posts';
import groups from './groups';

export default combineReducers({ posts, groups });
