// src\frontend\src\reduxs\Reducers\index.ts

import { combineReducers } from 'redux';
import tablesReducer from './tables/reducers';

export const rootReducer = combineReducers({
  props: tablesReducer
});
