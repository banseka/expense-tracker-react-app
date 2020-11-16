import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import Transaction from './Transaction'

export default function TransactionList() {
const {transactions} = useContext(GlobalContext)

  return (
    <>
      <h3 className="history-header">History</h3>
      <ul className='list'>
        {transactions.map((item) => (
         <Transaction key={item.id} transaction={item}/>
        ))}
      </ul>
    </>
  );
}
