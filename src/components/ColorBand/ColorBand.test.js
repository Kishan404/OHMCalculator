import React, { Component } from 'react';
const ReactTestRenderer = require('react-test-renderer');
import ColorBand from './ColorBand';



describe('Colorband Snapshot test', () => {
    it('Should compare the component with a snapshot', () => {
      
    // const component = '<div class="colorband"><label class="label" for="band0">Color Band A</label><select class="colorselector gray" id="band0"><option class="coloroption brown" value="Brown">Brown</option></select></div>'
    // expect(component).toMatchSnapshot();
      
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
