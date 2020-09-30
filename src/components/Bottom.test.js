import React from 'react';
import { shallow, mount } from 'enzyme';
import Bottom from './Bottom';

describe('Component rendering', () => {
  it('renders component without crashing', () => {
    shallow(<Bottom />);
  });
  /* other tests */
});
