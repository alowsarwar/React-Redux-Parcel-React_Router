import React from 'react';
import PropTypes from 'prop-types';

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    const { getTestData } = this.props;
    getTestData();
  }

  handleChange(e) {
    console.log(e);
    const { changeTestData } = this.props;
    changeTestData(e.target.value);
  }

  render() {
    const { testData } = this.props;
    return (
      <div>
        <input type="text" value={testData} onChange={this.handleChange} />
        <div>{testData}</div>
        <h2>This is a Redux controlled input field</h2>
      </div>
    );
  }
}

TestComponent.propTypes = {
  testData: PropTypes.string.isRequired,
  changeTestData: PropTypes.func.isRequired,
  getTestData: PropTypes.func.isRequired,
};

export default TestComponent;
