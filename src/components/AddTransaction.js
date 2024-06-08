import { useContext } from "react";
import React, {useState} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
const [text , setText]  = useState('');
const [amount , setAmount]  = useState(0);

const { addTransaction } = useContext(GlobalContext);

const onSubmit=(e)=>
  {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random()*100000000),
      text ,
       amount:+amount // here +amonut because it was passing as string and most simple way is to make it int is this way 
    }
    addTransaction(newTransaction)
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
    <div className="form-control">
      <label htmlFor="text">Text</label>
      <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text...'></input>
      </div>
    <div className="form-control">
      <label htmlFor="amount">Amount <br/> (negative-expense , positive-expense)</label>
      <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder='Enter amount...'></input>
      </div>
    <button className='btn'>Add Transaction</button>
      </form>
    </> 
  )
}

export default AddTransaction
