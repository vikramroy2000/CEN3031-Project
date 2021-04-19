import { combineReducers } from 'redux';
import posts from './posts';
import groups from './groups';
import survey from './survey';
import auth from './auth';

export default combineReducers({ posts, groups, survey, auth });
