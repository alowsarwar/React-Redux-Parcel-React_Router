import {
  applyMiddleware,
} from 'redux';
import TestMiddleware from './test_middleware';

const masterMiddleware = applyMiddleware(
  TestMiddleware,
);

export default masterMiddleware;
