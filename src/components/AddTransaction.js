import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const submitTransaction = (e) => {
    e.preventDefault();

    if (text.length <= 0 || amount === 0) {
      return null
    }
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction)
    setAmount(0)
    setText("")
  };

  return (
    <div className='add-transaction'>
      <h3 className='add-trans-header'>add new transaction</h3>
      <form id='form' onSubmit={submitTransaction}>
        <div className='form-control text'>
          <label htmlFor='text'>transaction</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control amount'>
          <label htmlFor='amount'>
            Amount <br />
            <p>(negative - expenses, positive - income)</p> 
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter Amount...'
          />
          <button className='add-trans-btn'>Add Transaction</button>
        </div>
      </form>
    </div>
  );
}
