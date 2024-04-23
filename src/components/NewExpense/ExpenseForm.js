import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  //Use multiple state for multiple inputs
  const [currentTitle, enteredTitle] = useState('');
  const [currentAmount, enteredAmount] = useState('');
  const [currentdate, enteredDate] = useState('');

  //Use one state for multiple inputs

  // const [currentVal, newVal] = useState({
  //   title: '',
  //   date: '',
  //   amount: ''
  // });

  const titleTrigger = (event) => {
    if (event && event.target && (event.target.value || event.target.value === '')) {
      //Update value while use one state for multiple inputs

      // newVal((prev) => {
      //   return { ...prev, title: event.target.value }
      // });
      enteredTitle(event.target.value);
    }
  }
  const amountTrigger = (event) => {
    if (event && event.target && (event.target.value || event.target.value === '')) {
      enteredAmount(event.target.value);
    }
  }
  const dateTrigger = (event) => {
    if (event && event.target && (event.target.value || event.target.value === '')) {
      enteredDate(event.target.value);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseObj = {
      title: currentTitle,
      amount: Number(currentAmount),
      date: new Date(currentdate)
    };
    if (props && props.saveNewExpense && ExpenseObj && ExpenseObj.title && ExpenseObj.amount && ExpenseObj.date) {
      props.saveNewExpense(ExpenseObj);
    } else {
      alert('Please fill the fields');
    }
    enteredTitle('');
    enteredAmount('');
    enteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={currentTitle} onChange={titleTrigger} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={currentAmount} min='0.01' step='0.01' onChange={amountTrigger} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={currentdate} min='2020-01-01' max='2025-12-31' onChange={dateTrigger} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )

  //Increment Decrement functionlatily

  // const [currentvalue, newValue] = useState(0);
  // const incrementEvent = () => {
  //   newValue((preValue) => {
  //     return preValue + 1;
  //   });
  // }
  // const decrementEvent = () => {
  //   newValue((preValue) => {
  //     return preValue - 1;
  //   });
  // }

  // <div>
  //   <p id="counter">{currentvalue}</p>
  //   <button onClick={incrementEvent}>Increment</button>
  //   <button onClick={decrementEvent}>Decrement</button>
  // </div>
}

export default ExpenseForm;