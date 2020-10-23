import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const submitTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction)
  };

  return (
    <>
      <h3>add new transaction</h3>
      <form id='form' onSubmit={submitTransaction}>
        <div className='form-control'>
          <label htmlFor='text'>text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expenses, positive - income)
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
    </>
  );
}
