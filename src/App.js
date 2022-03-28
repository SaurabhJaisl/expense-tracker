import React, { useState } from 'react'
import ExpenseCard from './components/ExpenseCard/expenseCard';
import NewExpense from './components/AddNewExpense/newExpense';

const App = (props) => {


  const [saveData, setSaveData] = useState([]);

  const AddNewExpense = (expenseData) => {

    const updateExpense = [expenseData, ...saveData] 
    setSaveData(updateExpense); 
  }


  return (
    <div className="App container">
      <div>
          <h1>Let's get Started</h1>
      </div>
      <NewExpense getExpensedata={AddNewExpense} />
      <ExpenseCard dataOnSave={saveData} />
</div>
  )
}

export default App
