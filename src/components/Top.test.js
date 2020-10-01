import React from 'react';
import { shallow, mount } from 'enzyme';
import Top from './Top';

describe('Component rendering', () => {
  it('renders component without crashing', () => {
    shallow(<Top />);
  });

  it('is passed the country prop', () => {
    const wrapper = shallow(<Top country='US' />);
    expect(wrapper.props().includedProp).toEqual('US');
  });
  /* other tests */
});
