import React, { Component } from 'react';
const ReactTestRenderer = require('react-test-renderer');
import Resistor from './Resistor';

describe('Resistor result Snapshot test', () => {
    it('Should compare the component with a snapshot', () => {
      
      const component = ReactTestRenderer.create(
        <Resistor 
            colorinputs = {['Red','Yellow','Gray','None']}
        />          
      );
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    })
  });

