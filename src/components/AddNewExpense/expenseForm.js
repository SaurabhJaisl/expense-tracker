import React, { useState } from 'react';
import './expenseForm.css';


const ExpenseForm = (props) => {

    const [Title, setTitle] = useState('');
    const [Amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expensedata = {
            expensetitle: Title,
            expenseAmount: Amount,
            expenseDate: new Date(date).toLocaleDateString()
        }

        props.onSaveData(expensedata);
        setTitle('');
        setAmount('');
        setDate('');
    }


  return (
    <div className='add_new'>
        <form onSubmit={ submitHandler } className='expense_form'>
            <div className='title'>
                <label>Title</label>
                <input type='text' value={Title} placeholder='Enter Title' onChange={ titleChangeHandler } />     
            </div>
            <div className='amount'>
                <label>Spend Amount</label>
                <input type='number' value={Amount} placeholder='Enter Spend Amount' min='1' onChange={amountChangeHandler} />     
            </div>
            <div className='date'>
                <label >Date</label>
                <input type='date' value={date} onChange={dateChangeHandler}/>     
            </div>   
            <div className='control'>
                <button type='submit' className='add_btn'>Add New Expense</button>
            </div>
        </form>    
    </div>
  )
}

export default ExpenseForm