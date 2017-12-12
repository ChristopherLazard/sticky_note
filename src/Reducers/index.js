import { combineReducers } from 'redux';
import notes from './notes';
import nextId from './nextId';
import filter from './filters';


const rootReducer = combineReducers({
  notes,
  nextId,
  filter,
});

export default rootReducer;
