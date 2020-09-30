import React from 'react';
import { shallow, mount } from 'enzyme';
import Middle from './Middle';

describe('Component rendering', () => {
  it('renders component without crashing', () => {
    shallow(<Middle />);
  });
  /* other tests */
});
