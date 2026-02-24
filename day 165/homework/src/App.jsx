import { useState } from 'react'
import './App.css'
import Count from './components/count'
import VariableCounter from './components/VariableCounter.jsx'
import ToDo from './components/ToDo.jsx'

function App() {

  return (
    <>
      <h2>Simple Counter</h2>
      <Count />
      <h2>Variable Counter</h2>
      <VariableCounter />
      <h2>To-Do List</h2>
      <ToDo />
    </>
  )
}

export default App
