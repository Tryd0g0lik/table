import { legacy_createStore as createStore, combineReducers } from 'redux';
import { rootReducer } from './Reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  composeEnhancers
);

export function storeDispatch(action: any): any {
  return store.dispatch(action);
}

export function storeGetstate(): any {
  return store.getState();
}

export default store;
