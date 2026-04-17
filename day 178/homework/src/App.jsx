import { useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import InnerBoundary from './components/InnerBoundary'
import { Child } from './components/Child'
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <InnerBoundary>
        <Child />
      </InnerBoundary>
    </ErrorBoundary>
  )
}

export default App
