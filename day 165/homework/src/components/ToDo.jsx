import { useReducer,useState } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "remove":
            return state.filter((item) => item.id !== action.payload.id);
        case "complete":
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            });
        default:
            throw new Error();
    }
}


export default function ToDo() {
    const [state, dispatch] = useReducer(reducer, []);
    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const addTodo = () => {
    if(input.trim() === "") return;
    
    dispatch({type: "add",
      payload: { 
        id: Date.now(),
        text: input,
        completed: false 
      }
    });
    
    setInput("");
  };
    return (
        <>
            <ul>
                {state.map((item, index) => (
                    <li key={index}>{item.text} 
                        <button onClick={() => dispatch({type: "remove", payload: {id: item.id}})}>Remove</button>
                        <button onClick={() => dispatch({type: "complete", payload: {id: item.id}})}>{item.completed ? 'Undo' : 'Done'}</button>
                    </li>
                ))}
                
            </ul>
            <input type="text" onChange={handleChange} value={input}/>
            <button onClick={addTodo}>Add</button>
        </>
    );
}