import React, { useState } from 'react'

export function Child() {

    const [crash, setCrash] = useState(false)

    if(crash){
        throw new Error("Crash")
    }
  
    return (
        <div>
            <h1>Child component</h1>
            <button onClick={() => setCrash(true)}>Make Error</button>
        </div>
    )
}