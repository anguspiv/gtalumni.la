import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from './index';

describe('<IndexPage />', () => {
  it('should render', () => {
    const wrap = shallow(<IndexPage />);

    const title = wrap.find('h1');

    expect(title.text()).toBe('Hi people');
  });
});
