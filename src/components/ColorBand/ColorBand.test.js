import React, { Component } from 'react';
const ReactTestRenderer = require('react-test-renderer');
import ColorBand from './ColorBand';



describe('Colorband Snapshot test', () => {
    it('Should compare the component with a snapshot', () => {
      const component = ReactTestRenderer.create(
        <ColorBand 
          key ={0}
          bandIndex = {0}
          bandLabel = {'Band A'} 
          bandOptions = {['gray','Brown']} />
      );
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    })
  });
