import {useContext}from "react";
import { ThemeContext } from "../context/ThemeContext";

export const HomePage = () =>{
    const {theme,changeTheme} = useContext(ThemeContext)

    return(
        <div>
            <h1>HI this webpages Theme is {theme}</h1>
            
            <button onClick={changeTheme}>change theme to
                {theme == "light" ? "dark" : "light"}
            </button>
        </div>
    )
}