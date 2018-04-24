import React, { Component } from 'react';
const ReactTestRenderer = require('react-test-renderer');
import Header from './Header';

describe('Header result Snapshot test', () => {
    it('Should compare the component with a snapshot', () => {
      
    // const component = '<div class="header"><h1 class="header-title">4-Band Resistor ohm value  calculator</h1><img src="/static/media/resister.4013174d.svg" class="header-logo" alt="logo"><p class="header-subtitle">A usefull tool for reading resistor color code values</p></div>'
    // expect(component).toMatchSnapshot();
      
      const component = ReactTestRenderer.create(
        <Header
            hearder = {'4-Band Resistor ohm value calculator'}
            subTitle ={'A usefull tool for reading resistor color code values'} 
        />          
      );
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    })
  });
