import React, { Component } from 'react';
const ReactTestRenderer = require('react-test-renderer');
import Header from './Header';

describe('Header result Snapshot test', () => {
    it('Should compare the component with a snapshot', () => {
      
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
