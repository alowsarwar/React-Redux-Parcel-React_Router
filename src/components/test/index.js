import { connect } from 'react-redux';
import Test from './Test';

import {
  testData,
} from '../../../reducers/selector';

import {
  changeTestData,
  getTestData,
} from '../../../actions/test_actions';

const mapStateToProps = state => ({
  testData: testData(state),
});

const mapDispatchToProps = dispatch => ({
  getTestData: data => dispatch(getTestData(data)),
  changeTestData: data => dispatch(changeTestData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
