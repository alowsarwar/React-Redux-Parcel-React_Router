// Import Action Constants
import {
  CHANGE_TEST_DATA,
  RECEIVE_TEST,
  GET_TEST_DATA,
} from '../actions/test_actions';


const defaultState = {};

// Define Reducer and State
const TestReducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case RECEIVE_TEST: {
      newState.testData = action.data;
      return newState;
    }
    case CHANGE_TEST_DATA: {
      newState.testData = action.data;
      return newState;
    }
    case GET_TEST_DATA: {
      newState.testData = action.data;
      return newState;
    }
    default:
      return state;
  }
};

export default TestReducer;
