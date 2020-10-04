import React from 'react';
import { shallow, mount } from 'enzyme';
import Bottom from './Bottom';

describe('Component rendering', () => {
  it('renders component without crashing', () => {
    const data = {
      user: { 'Dollar price': 3, 'Local price': 3 },
      random: { Country: 'France', 'Dollar Price': 2.5 },
      currency: { user: { 'Alphabetic Code': 'USD' }, random: { 'Alphabetic Code': 'EUR' } },
    };
    shallow(<Bottom amount={'0'} formatCurrency={() => {}} data={data} />);
  });
  /* other tests */
});
