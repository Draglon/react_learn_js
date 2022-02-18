import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../Header';

import Home from '../Home';
import Promise from '../Promise';
import Generators from '../Generators';
import NotFound from '../NotFound';

import PrivateRoute from './PrivateRoute';

const AppComponent = ({ sessionId }) => (
  <Router>
    <>
      {sessionId && <Header />}
      <Layout.Content className="page">
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/promise" component={Promise} />
          <PrivateRoute exact path="/generators" component={Generators} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </Layout.Content>
    </>
  </Router>
);

AppComponent.propTypes = {
  sessionId: PropTypes.string.isRequired,
};

export default AppComponent;
