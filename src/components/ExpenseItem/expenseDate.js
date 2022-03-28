import React from 'react'
import './expenseItem.css'

const expenseDate = (props) => {
  return (
    <div className='date'>{props.date}</div>
  )
}

export default expenseDate