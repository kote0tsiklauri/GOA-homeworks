import {useState,useEffect} from "react"

export const Input = ()=>{
    const [query,setQuery] = useState("")
    const [debouncedQuery,setDebouncedQuery] = useState("")


    useEffect(()=>{
        const handler = setTimeout(() => {
            setDebouncedQuery(query)
        }, 500);

        return()=>{
            clearTimeout(handler)
        }
    },[query])

    useEffect(()=>{
        if(debouncedQuery){
            console.log(debouncedQuery)
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