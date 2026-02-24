import { useState } from 'react'
import {Count} from "./components/Count"
import { InputTracker } from './components/InputTracker'
import { ClickTracker } from './components/ClickTracker'
import { CountBackground } from './components/CountBackground'
import './App.css'


function App() {
  

  return (
    <>
      <Count />
      <InputTracker />
      <ClickTracker />
      <CountBackground />
    </>
  )
}

export default App
