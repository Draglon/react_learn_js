import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';

const HomeComponent = ({ sessionId }) => (
  sessionId
  ? (
    <>
      asdasdasd
    </>
  )
  : <LoginForm />
);

HomeComponent.propTypes = {
  sessionId: PropTypes.string.isRequired,
};

export default HomeComponent;
