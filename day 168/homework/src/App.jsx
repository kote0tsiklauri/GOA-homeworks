
import { CompletedTodos } from './components/CompletedTodos'
import { TodoCount } from './components/TodoCount'
import { ProductTotal } from './components/ProductTotal'
import { UserNameLength } from './components/UserList'
import { SumTwoNumbers } from './components/SumTwoNumbers'
import './App.css'

function App() {

  return (
    <>
      <UserNameLength />
      <ProductTotal />
      <SumTwoNumbers />
      <TodoCount />
      <CompletedTodos
        todos={[
          { text: "Task 1", completed: true },
          { text: "Task 2", completed: false },
        ]}
      />
      
    </>
  )
}

export default App
