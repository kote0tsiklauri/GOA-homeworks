import React from 'react'

export default function Buttons({ color, on, changeOn, id }) {
  
    return (
        <div 
        style={{backgroundColor: color, opacity: on ? 1 : 0.3}} 
        onClick={() => changeOn(id)}
        />
    )
}