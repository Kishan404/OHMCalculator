import React, { Component } from 'react';
const ReactTestRenderer = require('react-test-renderer');
import OhmValue from './OhmValue';
import OhmValueApp from '../OhmValueApp/OhmValueApp';

describe('OhmValue result Snapshot test', () => {
    it('Should compare the component with a snapshot', () => {
      
    // const component = '<div class="result"><div class="result-error"></div><div class="resultrow"><div class="resultlable"><label class="label">Resistance:</label></div><div class="value resultvalue"><label>12</label></div><div class="resultunits"><label>ohms</label></div></div><div class="resultrow"><div class="resultlable"><label class="label">Tolerance:</label></div><div class="value resultvalue"><label>± 0.05%</label></div><div class="resultunits"><label></label></div></div><div class="resultrow"><div class="resultlable"><label class="label">Minimum:</label></div><div class="value resultvalue"><label>11.994</label></div><div class="resultunits"><label>ohms</label></div></div><div class="resultrow"><div class="resultlable"><label class="label">Maximum:</label></div><div class="value resultvalue"><label>12.006</label></div>                <div class="resultunits"><label>ohms</label></div></div></div>'
    // expect(component).toMatchSnapshot();
      
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

