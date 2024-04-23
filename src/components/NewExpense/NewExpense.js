import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  //Pass data from child to parent
  const [addExpense, updatedAddExpense] = useState(false);

  const newExpenseHandler = () => {
    updatedAddExpense(true);
  }
  const cancelHandler = () => {
    updatedAddExpense(false);
  }


  const saveExpenseData = (data) => {
    if (data) {
      const expenseData = {
        ...data,
        id: Math.random().toString()
      };
      if (props && props.saveExpense) {
        props.saveExpense(expenseData);
      }
      console.log(expenseData, 'NewExpense');
    }
  }

  return (
    <div className='new-expense'>
      {/* Conditional Rendering */}
      {!addExpense && < button onClick={newExpenseHandler} > New Expense</button >}
      {addExpense && <ExpenseForm saveNewExpense={saveExpenseData} onCancel={cancelHandler} />}
    </div>
  )
}

export default NewExpense;