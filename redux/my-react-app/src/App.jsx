import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { addCustomerAction, removeCustomerAction } from './store/customerReducer'


function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cashReducer.cash)
  const customers = useSelector(state => state.customerReducer.customers)
  console.log(cash)
  console.log(customers.length)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  const addCustomer = (name) => {
    const costumer = {
      name,
      id: Date.now(),
    }

    dispatch(addCustomerAction(costumer))
  }
  const removeCustomer = (customer) =>{
    dispatch(removeCustomerAction(customer))
  }

  return (
    <div>
      <div>{cash}</div>
      <button onClick={
        () => addCustomer(prompt())
        }>
        Добавить клиента
      </button><br />

      <button onClick={() => addCash(Number(prompt()))}>
        Пополнить счет
      </button><br />
      <button onClick={() => getCash(Number(prompt()))}>
        Снять со счета
      </button>

      {customers.length > 0 ? 
        <div> 
          {customers.map(customer =>
            <div onClick={ () => removeCustomer(customer)}>
              {customer.name}
            </div>
            )}
        </div>
        :
        <div>Клиенты отсутствуют</div>
      }
    </div>
  )
}

export default App
