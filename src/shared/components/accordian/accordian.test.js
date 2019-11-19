import React from 'react';
import { shallow } from 'enzyme';

import Accordian, { Container, AccordianButton, InnerPanel, Icon } from './index';
import { filters } from './accordian.stories';

describe('Accordian', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Accordian filters={[...filters, {
      id: "f02",
      name: "Exclude Out of Stock"
    }]} />);
  })

  it('should render all filters correctly', () => {
    expect(wrapper.find(Container).children(AccordianButton).length).toEqual(3);
  });

  it('should expand filter on click', () => {
    expect(wrapper.find(Container).children(InnerPanel).at(0).props().show).toBe(false);
    wrapper.find(Container).children(AccordianButton).at(0).simulate('click');
    expect(wrapper.find(Container).children(InnerPanel).at(0).props().show).toBe(true);

  });

  it('should display a checkbox when the filter has no types', () => {
    expect(wrapper.find(Container).children(AccordianButton).at(2).children('input').length).toBe(1);
  })

  it('should display an icon with expandable panel when the filter has types', () => {
    expect(wrapper.find(Container).children(AccordianButton).at(1).children('input').length).toBe(0);
    expect(wrapper.find(Container).children(AccordianButton).at(1).children(Icon).length).toBe(1);
    expect(wrapper.find(Container).children(InnerPanel).length).toBe(2);
  })
});