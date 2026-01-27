import { useState } from 'react'
import Message from './Message'
import UserInfo from './UserInfo'
import Counter from './Counter'
import './App.css'
// props არის ობიექტი, რომელიც კომპონენტს გადაეცემა parent კომპონენტიდან
// props-ით ჩვენ შეგვიძლია კომპონენტს მივაწოდოთ მონაცემები (data)
// props არის read-only (ვერ შევცვლით პირდაპირ)
// props მუშაობს როგორც ფუნქციის პარამეტრები
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Message text="Hello kocho!" />
      <UserInfo name="Nika" age={15} />
      <Counter initial={10} />
    </>
  )
}

export default App
