import { combineReducers } from 'redux';
import posts from './posts';
import groups from './groups';
import survey from './survey';

export default combineReducers({ posts, groups, survey });
