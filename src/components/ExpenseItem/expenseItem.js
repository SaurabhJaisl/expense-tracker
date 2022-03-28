import React,{ useState } from 'react';
import './expenseItem.css'
import ExpenseDate from './expenseDate';


function expenseItem(props) {
    return (
      
        <div className='expense-item'>
          <ExpenseDate  date={props.date} />
          <div className='expense_description'>
              <h2>{props.title}</h2>
              <div className='price' >${props.price}</div>
          </div>
      </div>
    )
} 

export default expenseItem