import React from 'react';
import ReactDOM from 'react-dom';
import OhmValueCalculator from './OhmValueCalculator';

it('Resister color code test', () => {
  const obj = new OhmValueCalculator();
  let result = obj.calculateOhmValue('Red','Red','Orange','None');
  expect(result.Ohm).toBe(22000);
  
});

it('Resister color code test', () => {
  const obj = new OhmValueCalculator();
  const inputcolors = ['Red','Red','Orange','None'];
  let result = obj.calculateOhmValue(...inputcolors);
  expect(result.Ohm).toBe(22000);
  
});

it('Resister color code test', () => {
  const obj = new OhmValueCalculator();
  const inputcolors = ['Red','Red','Orange','None'];
  let result = obj.calculateOhmValue(...inputcolors);
  expect(result.tolerance).toBe(20);  
});

it('Resister color code test', () => {
  const obj = new OhmValueCalculator();
  let result = obj.calculateOhmValue('Red','Red','Orange','None');
  
  expect(result.tolerance).toBe(20);
});

it('Resister color code test', () => {
  const obj = new OhmValueCalculator();
  let result = obj.calculateOhmValue('Red','Red','1Orange','None');
  expect(result.error).toBe("Invalid Input");
  expect(result.tolerance).toBe(20);
});


it('Resister color code test', () => {
  const obj = new OhmValueCalculator();
  let result = obj.calculateOhmValue('Red','Red','None');
  expect(result.error).toBe("Invalid Input");

});

it('Resister color code test', () => {
  const obj = new OhmValueCalculator();
  let result = obj.calculateOhmValue('Red','Red');
  expect(result.error).toBe("Insufficient input");

});