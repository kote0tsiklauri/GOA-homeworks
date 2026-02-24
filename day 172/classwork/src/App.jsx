import { useState,useEffect, use} from 'react'

import './App.css'

function App() {
  const [query,setQuery] = useState("")
  const [debouncedQuery,setDebouncedQuery] = useState("")

  useEffect(()=>{
    const handler = setTimeout(()=>{
      setDebouncedQuery(query)
      console.log('hello')
    },500)
    console.log("hi")
    return ()=>{
      clearTimeout(handler)
    }
  },[query])

  useEffect(()=>{
    if(debouncedQuery){
      console.log("API call with query: ",debouncedQuery)
    }
  },[debouncedQuery])
  return (
    <div>
      <input 
        type="text"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
       />
    </div>
  )
}

export default App
