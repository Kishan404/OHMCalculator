import React from 'react';
import ReactDOM from 'react-dom';
import OhmValueCalculator from './OhmValueCalculator';

it('Resister color code test', () => {
  const obj = new OhmValueCalculator();
  let result = obj.calculateOhmValue('Red','Red','Orange','None');
  expect(result.Ohm).toBe(22000);
  expect(result.tolerance).toBe("20");
});
