import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Todo from './Todo.jsx'
import Posts from './Posts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo />
    <Posts />
  </StrictMode>,
)
