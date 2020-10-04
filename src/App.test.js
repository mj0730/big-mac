import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Top from './components/Top';
import Middle from './components/Middle';
import Bottom from './components/Bottom';

describe('Component rendering', () => {
  it('renders App without crashing', () => {
    shallow(<App />);
  });

  it('App does not mount child components without data ', () => {
    const wrapper = mount(<App />);

    expect(wrapper.containsAllMatchingElements([<Top />, <Middle />, <Bottom />])).toEqual(false);
  });
  /* other tests */
});
