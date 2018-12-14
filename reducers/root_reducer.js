import { combineReducers } from 'redux';

import testReducer from './test_reducer';

// Merge Individual Reducers Into Root Reducer
const RootReducer = combineReducers({
  test: testReducer,
});
// console.log('type of reduer-', typeof RootReducer);
export default RootReducer;
