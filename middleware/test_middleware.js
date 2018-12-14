import {
  GET_TEST_DATA,
  receiveTest,
} from '../actions/test_actions';

// Define Middleware
const TestMiddleware = ({ dispatch }) => next => (action) => {
  switch (action.type) {
    case GET_TEST_DATA: {
      // Fake api call & get response
      const resp = 'test message';
      return dispatch(receiveTest(resp));
    }

    default:
      next(action);
  }

  return null;
};
export default TestMiddleware;
