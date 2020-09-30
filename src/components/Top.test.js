import React from 'react';
import { shallow, mount } from 'enzyme';
import Top from './Top';

describe('Component rendering', () => {
  it('renders component without crashing', () => {
    shallow(<Top />);
  });

  /* other tests */
});
