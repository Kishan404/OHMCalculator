import React, { Component } from 'react';
const ReactTestRenderer = require('react-test-renderer');
import Resistor from './Resistor';

describe('Resistor result Snapshot test', () => {
    it('Should compare the component with a snapshot', () => {
      
    // const component = '<div class="resistor"><span class="wire-start"></span><span class="resitor-start"></span><span class="resitor-middle"></span><span class="resitor-end"></span><span class="wire-end"></span><span class="resistor-color resistor-colorA red"></span><span class="resistor-color resistor-colorB yellow"></span><span class="resistor-color resistor-colorC gray"></span><span class="resistor-color resistor-colorD none"></span></div>'
    // expect(component).toMatchSnapshot();
      
      const component = ReactTestRenderer.create(
        <Resistor 
            colorinputs = {['Red','Yellow','Gray','None']}
        />          
      );
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    })
  });

