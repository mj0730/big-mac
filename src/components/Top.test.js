import React, { useState } from 'react';
import { shallow, mount } from 'enzyme';
import Top from './Top';

describe('Component rendering', () => {
  it('renders component without crashing', () => {
    shallow(<Top />);
  });

  it('is passed the country prop', () => {
    const wrapper = shallow(<Top userCountry='US' />);
    expect(wrapper.props().includedProp).toEqual('US');
  });

  it('should have a number input field', () => {
    const wrapper = shallow(<Top />);
    expect(wrapper.find('input[type="number"]').length).toEqual(1);
  });

  it('should set the amount value on change event', () => {
    const wrapper = mount(<Top amount={0} />);
    wrapper.find('input[type="number"]').simulate('change', {
      target: {
        value: 100,
      },
    });
    expect(wrapper.find('input[type="number"]').prop('value')).toEqual(100);
  });
  /* other tests */
});
