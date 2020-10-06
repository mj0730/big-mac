import React from 'react';
import { shallow } from 'enzyme';
import Middle from './Middle';

describe('Middle component rendering', () => {
  it('renders component without crashing', () => {
    const data = { user: { 'Dollar PPP': 1 } };
    shallow(<Middle amount={'0'} data={data} />);
  });

  /* other tests */
});
