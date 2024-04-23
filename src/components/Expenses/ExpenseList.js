import React from 'react';
import Expense from "./Expenses";
import './ExpenseList.css';

const ExpenseList = (props) => {
  if (props && props.items && props.items.length) {
    return (
      <ul className='expenses-list'>
        {
          props.items.map(e =>
            <Expense title={e.title} date={e.date} amount={e.amount} key={e.id} />
          )
        }
      </ul>
    )
  } else {
    return <h2 className='expenses-list__fallback'>Found no expenses in this year.</h2>
  }
}

export default ExpenseList;