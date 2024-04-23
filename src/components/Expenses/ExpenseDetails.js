import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter.js';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart.js'
import './ExpenseDetails.css';

const ExpenseDetails = (props) => {
  // const [currentExpenses, updatedExpenses] = useState(details);

  // if (props && props.addExpense) {
  //   updatedExpenses((prevExpense) => {
  //     return [props.addExpense, ...prevExpense];
  //   });
  //   console.log(details, 'ExpenseDetails');
  // }
  // console.log(props.addExpense, currentExpenses, 'ExpenseDetails');
  // const [value, newVal] = useState('Hello');
  // const buttonText = () => {
  //   newVal('How Are You ?');
  // }

  const [currentYear, newYear] = useState('All');
  const filterHandler = (data) => {
    console.log(data, "FILTER");
    newYear(data);
  }

  const filteredItems = (currentYear === 'All') && props.addExpense && props.addExpense.length ? props.addExpense : props.addExpense && props.addExpense.length && props.addExpense.filter(e => {
    return e && e.date.getFullYear().toString() === currentYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseChart expenses={filteredItems} />
        <ExpensesFilter key='filter' selectedYear={currentYear} filterYear={filterHandler} />
        <ExpenseList items={filteredItems} />
      </Card>
    </div>
  );
}
export default ExpenseDetails;