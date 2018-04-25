import React, { Component } from 'react';
const ReactTestRenderer = require('react-test-renderer');
import OhmValue from './OhmValue';
import OhmValueApp from '../OhmValueApp/OhmValueApp';

describe('OhmValue result Snapshot test', () => {
    it('Should compare the component with a snapshot', () => {
      
      const component = ReactTestRenderer.create(
        <OhmValue
            resistance = {12}
            tolerance = {0.05}
            error = {undefined}            
        />
      );
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    })
  });

