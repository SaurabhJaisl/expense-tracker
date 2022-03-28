import React from 'react'
import ExpenseForm from './expenseForm'

const newExpense = (props) => {

  const saveExpenseData = (receivedData) => {

    props.getExpensedata(receivedData);
  }
  return (
    <div className='container'>
        <ExpenseForm onSaveData={saveExpenseData} />
    </div>
  )
}

export default newExpense