import React from 'react';
import configureStore from 'redux-mock-store';

import GeneratorsContainer from '../container';

describe('Generators container', () => {
  const store = configureStore()();
  store.dispatch = jest.fn();

  const defaultProps = {
    store,
  };

  const wrapper = shallow(<GeneratorsContainer {...defaultProps} />);
  const container = wrapper.dive();

  it('renders Generators component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
