export const GET_TEST_DATA = 'GET_TEST_DATA';
export const RECEIVE_TEST = 'RECEIVE_TEST';
export const CHANGE_TEST_DATA = 'CHANGE_TEST_DATA';

export const getTestData = (data) => ({
  type: GET_TEST_DATA,
  data,
});

export const receiveTest = (data) => ({
  type: RECEIVE_TEST,
  data,
});

export const changeTestData = (data) => ({
  type: CHANGE_TEST_DATA,
  data,
});
