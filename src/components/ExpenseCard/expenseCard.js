import React from 'react'
import ExpenseItem from '../ExpenseItem/expenseItem';


const expenseCard = (props) => {

  // console.log(props);


      const expenseItems = props.dataOnSave.map((data, index) => {
        if (data.expensetitle != "" && data.expenseAmount != "") 
         return <ExpenseItem key={index} date={data.expenseDate} title={data.expensetitle} price={data.expenseAmount} />
      });

  return (
    <>
        {expenseItems}
    </>
  )
}

export default expenseCard