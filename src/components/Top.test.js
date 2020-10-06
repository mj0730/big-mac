import React from 'react';
import { shallow } from 'enzyme';
import Top from './Top';

describe('Component rendering', () => {
  it('renders component without crashing', () => {
    shallow(<Top amount={'0'} userCountry='US' setAmount={() => {}} data={{}} />);
  });

  it('is passed the country prop', () => {
    const wrapper = shallow(<Top amount={'0'} userCountry='US' setAmount={() => {}} data={{}} />);
    expect(wrapper.find('p').html()).toEqual('<p>Your country: US</p>');
  });

  it('should have a number input field', () => {
    const wrapper = shallow(<Top amount={'0'} userCountry='US' setAmount={() => {}} data={{}} />);
    expect(wrapper.find('input[type="number"]')).toHaveLength(1);
  });
  /* other tests */
});
