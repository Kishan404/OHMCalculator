import React, { Component } from 'react';
const ReactTestRenderer = require('react-test-renderer');
import ColorBands from './ColorBands';
import OhmValueApp from '../OhmValueApp/OhmValueApp';

describe('Colorbands Snapshot test', () => {
    it('Should compare the component with a snapshot', () => {
      const component = ReactTestRenderer.create(
        <ColorBands
        bandsList = {[
        {
            bandLabel: "Color Band A",
            bandType: "firstDigitColor",
            colorOptions: {
                Brown: 1,
                Red: 2,
                Orange: 3,
                Yellow: 4,
                Green: 5,
                Blue: 6,
                Violet: 7,
                Gray: 8,
                White: 9
            }
        }]}
        handleColorPick = {OhmValueApp.handleColorPick} 
        />
      );
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    })
  });