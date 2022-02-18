import React from 'react';

import GeneratorsComponent from '../component';

describe('Generators component matches snapshot', () => {
  const component = shallow(<GeneratorsComponent />);

  it('with default props', () => {
    expect(component).toMatchSnapshot();
  });
});
