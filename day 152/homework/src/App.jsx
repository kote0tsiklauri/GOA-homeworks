import { useState } from 'react'
import Title from './Title'
import Profile from './Profile'
import Price from './Price'
import './App.css'

function App() {
  

  return (
    <>
      <Title title="Welcome to React" />
      <Profile username="Nika" country="Georgia" />
      <Price amount={20} />
    </>
  )
}

export default App
