import React, { useContext } from 'react'
import { colorContext } from '../context/ColorContext'
import { fontSizeContext } from '../context/FontSizeContext'
import { roleContext } from '../context/RoleContext'

export const Output = () => {
    const color = useContext(colorContext)
    const fontSize = useContext(fontSizeContext)
    const role = useContext(roleContext)
    return (
        <div>
            <h2>Role: {role}</h2>
            <h1 style={{color:color, fontSize: fontSize}}>The color is {color}, and the font size is {fontSize}</h1>
        </div>
    )
}
