import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Transaction({ transaction }) {
  //delete transaction from context
  const { deleteTransaction } = useContext(GlobalContext);
//getting the sign of transaction if its an income or expense
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className='delete-btn' onClick={()=>deleteTransaction(transaction.id)}>
        X
      </button>
    </li>
  );
}
