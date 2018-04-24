import React, { Component } from 'react';
const ReactTestRenderer = require('react-test-renderer');
import ColorBands from './ColorBands';
import OhmValueApp from '../OhmValueApp/OhmValueApp';

describe('Colorbands Snapshot test', () => {
    it('Should compare the component with a snapshot', () => {
      
    // const component = '<div class="colorbands"><div class="colorband"><label class="label" for="band0">Color Band A</label><select class="colorselector yellow" id="band0"><option class="coloroption brown" value="Brown">Brown</option><option class="coloroption red" value="Red">Red</option><option class="coloroption orange" value="Orange">Orange</option><option class="coloroption yellow" value="Yellow">Yellow</option><option class="coloroption green" value="Green">Green</option><option class="coloroption blue" value="Blue">Blue</option><option class="coloroption violet" value="Violet">Violet</option><option class="coloroption gray" value="Gray">Gray</option><option class="coloroption white" value="White">White</option></select></div></div>'
    // expect(component).toMatchSnapshot();
      
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