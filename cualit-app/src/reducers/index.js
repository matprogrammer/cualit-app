import { combineReducers } from 'redux';
import getTutorials from './getTutorials';
import showToast from './showToast';

export default combineReducers({
  tutorials: getTutorials,
  toast: showToast,
});
