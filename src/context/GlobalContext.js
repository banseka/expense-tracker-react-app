import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
  transactions: [
    {id: 1, text:'flight', amount: 30}
  ]
}

// global context

export const GlobalContext = createContext(initialState)

//provider component

export const GlobalProvider = ({children})=>{
const [state, dispatch] = useReducer(AppReducer, initialState)

//actions
function deleteTransaction (id){
dispatch({
  type: 'DELETE_TRANSACTION',
  payload: id
})
}

function addTransaction (transaction){
dispatch({
  type: 'ADD_TRANSACTION',
  payload: transaction
})
}

return(<GlobalContext.Provider value={{
  transactions: state.transactions,
  deleteTransaction,
  addTransaction
}}>
  {children}
  </GlobalContext.Provider>)
}
