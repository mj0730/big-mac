import React from 'react';
import { shallow, mount } from 'enzyme';
import Macs from './Macs';

describe('Macs component rendering', () => {
  it('renders component without crashing', () => {
    shallow(<Macs num={0} />);
  });

  it('outputs an array of the correct length', () => {
    const wrapper = mount(<Macs num={10} />);

    expect(wrapper.find('img')).toHaveLength(10);
  });

  it('renders numbers greater than 100 as an extra paragraph', () => {
    const wrapper = mount(<Macs num={110} />);

    expect(wrapper.find('.extra')).toHaveLength(1);
  });
});
