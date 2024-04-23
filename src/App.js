// import * as value from "./utils";
import React, { useState } from 'react';
import ExpenseDetails from "./components/Expenses/ExpenseDetails";
import NewExpense from './components/NewExpense/NewExpense';

const details = [
  {
    id: 'e1',
    title: 'For Food',
    date: new Date('09 06 2023'),
    amount: 100
  }, {
    id: 'e2',
    title: 'Movie',
    date: new Date('01 14 2022'),
    amount: 230
  }, {
    id: 'e3',
    title: 'Shopping',
    date: new Date('04 11 2021'),
    amount: 50
  }, {
    id: 'e4',
    title: 'Shopping',
    date: new Date('03 12 2021'),
    amount: 1000
  }, {
    id: 'e5',
    title: 'Shopping',
    date: new Date('02 10 2021'),
    amount: 500
  }
];

const App = () => {

  const [currentExpenses, updatedExpenses] = useState(details);

  console.log(details, 'ExpenseDetails');

  const createNewExpense = (data) => {
    if (data) {
      updatedExpenses((prevExpense) => {
        return [data, ...prevExpense];
      });
    }
  }
  return (
    <div>
      {/* <h2>Let's get started {value.secret}!</h2> */}
      <NewExpense saveExpense={createNewExpense} />
      <ExpenseDetails addExpense={currentExpenses} />
    </div>
  );
}

export default App;
