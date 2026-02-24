import { useState,useRef,useEffect } from "react";


export const InputTracker = ()=>{
    const [text,setText] = useState("")
    const textRef = useRef(null)

    useEffect(()=>{
        textRef.current = text
    },[text])

    const handleChange = (e)=>{
        setText(e.target.value)
    }

    return(
        <div>
            <input 
                type="text" 
                value={text} 
                onChange={handleChange} 
                placeholder="Type something..."
            />
            <p>Current Text: {text}</p>
            <p>Previous Text: {textRef.current}</p>
        </div>
    )
} 