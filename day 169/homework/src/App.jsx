import { useState } from 'react'
import TodoList from './components/TodoList'
import CartSummary from './components/Cart'
import StudentsList from './components/StudentScore'
import Password from './components/Password'
import SearchInput from './components/SearchInput'

function App() {


  return (

    <>
      <Password />
      <SearchInput />
      <CartSummary />
      <StudentsList />
      <TodoList />
    </>
  )
}

export default App
