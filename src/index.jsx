import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from '../store/store';
import Test from './components/test';
import Header from './components/Header';

const Home = () => (
  <div>
    Home
  </div>
);

const About = () => (
  <div>
    About
  </div>
);

const Code = () => (
  <div>
    Code
  </div>
);

const Contact = () => (
  <div>
    Contact
  </div>
);

const info = () => (
  <div>
    info
  </div>
);


const App = (props) => {
  const { children } = props;
  return (
      <Router>
        <div>
          <div>
            <Header />
            <div className="container">
              {children}
            </div>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/info" component={info} />
            <Route exact path="/test" component={Test} />
          </div>
        </div>
      </Router>
  );
};


const app = document.getElementById('app');
const store = configureStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, app);

App.propTypes = {
  children: PropTypes.element.isRequired,
};
