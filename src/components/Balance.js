import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function () {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((item) => item.amount);
  const total =
    amounts.length <= 0
      ? 0.00
      : amounts.reduce((acc, cur) => (acc += cur)).toFixed(2);
  return (
    <div className='balance-container'>
      <h4 className='balance-header'>your balance</h4>
      <h1 className='balance'>${total}</h1>
    </div>
  );
}
