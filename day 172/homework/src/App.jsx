import { useState } from 'react'
import { Input } from './components/Input'
import { UserFiltter } from './components/userFilter'
import { ApiFiltter } from './components/ApiFiltter'
import './App.css'

function App() {
  

  return (
    <>
      <Input />
      <UserFiltter/>
      <ApiFiltter />
    </>
  )
}

export default App
