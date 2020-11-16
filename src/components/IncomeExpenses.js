import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((item) => item.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, cur) => (acc += cur), 0)
    .toFixed(2);

  const expense = (
    amount.filter((item) => item < 0).reduce((acc, cur) => (acc += cur), 0) * -1
  ).toFixed(2);
  return (
    <div className='inc-exp-container'>
      <div className='income-container'>
        <h4>income</h4>
        <p  className='money-plus'>
          {income}
        </p>
      </div>
      <div className='expense-container'>
        <h4>expense</h4>
        <p className='money-minus'>
          {expense}
        </p>
      </div>
    </div>
  );
}
