import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');
    const add = container.getByTestId('operator-add');
    const button4 = container.getByTestId('number4');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract 4 from 7', () => {
    const runningTotal = container.getByTestId('running-total');
    const button7 = container.getByTestId('number7');
    const subtract = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply 3 by 5', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');
    const multiply = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide 21 by 7', () => {
    const runningTotal = container.getByTestId('running-total');
    const button9 = container.getByTestId('number9');
    const button3 = container.getByTestId('number3');
    const button7 = container.getByTestId('number7');
    const add = container.getByTestId('operator-add');
    const divide = container.getByTestId('operator-divide');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button9);
    fireEvent.click(add);
    fireEvent.click(button9);
    fireEvent.click(add);
    fireEvent.click(button3);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatenate numbers', () => {
    const runningTotal = container.getByTestId('running-total');
    const button9 = container.getByTestId('number9');
    const button4 = container.getByTestId('number4');
    const button2 = container.getByTestId('number2');
    const button7 = container.getByTestId('number7');
    const button1 = container.getByTestId('number1');
    fireEvent.click(button9);
    fireEvent.click(button4);
    fireEvent.click(button2);
    fireEvent.click(button7);
    fireEvent.click(button1);
    expect(runningTotal.textContent).toEqual('94271');
  })

  it('should chain togetther operators', () => {
    const runningTotal = container.getByTestId('running-total');
    const button9 = container.getByTestId('number9');
    const button5 = container.getByTestId('number5');
    const button7 = container.getByTestId('number7');
    const add = container.getByTestId('operator-add');
    const multiply = container.getByTestId('operator-multiply');
    const subtract = container.getByTestId('operator-subtract');
    const equals = container.getByTestId('operator-equals');
    fireEvent.click(button9);
    fireEvent.click(add);
    fireEvent.click(button5);
    fireEvent.click(equals);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals);

    expect(runningTotal.textContent).toEqual('70');
  })

  it('should clear previous calculation', () => {
    const runningTotal = container.getByTestId('running-total');
    const button9 = container.getByTestId('number9');
    const button5 = container.getByTestId('number5');
    const button7 = container.getByTestId('number7');
    const button0 = container.getByTestId('number0');
    const add = container.getByTestId('operator-add');
    const multiply = container.getByTestId('operator-multiply');
    const subtract = container.getByTestId('operator-subtract');
    const equals = container.getByTestId('operator-equals');
    const clear = container.getByTestId('clear')
    fireEvent.click(button9);
    fireEvent.click(clear)
    fireEvent.click(add);
    fireEvent.click(button5);
    fireEvent.click(clear)
    fireEvent.click(add);
    fireEvent.click(button5);
    fireEvent.click(add);
    fireEvent.click(button5);
    fireEvent.click(equals)
    
    
    expect(runningTotal.textContent).toEqual('10');
});


});

