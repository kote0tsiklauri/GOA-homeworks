import { useState } from "react";
//* add item
//* remove by index
//* clear array
//* change alrd exsisting item
//* fillter by callback
export default useArray = ()=>{
    const [array,setArray] = useState([])

    const add = (item) => {setArray(prev => [...prev,item])};

    const remove = (index) => {setArray(prev => prev.fillter((_,i) => i !== index))};

    const change = (value,index) => {setArray(prev => prev.map((item,i) => i==index ? value : item ))};

    const fillter = (callback) => {setArray(prev => prev.filter(callback))}

    const sort = () => {array.sort((a,b) => a-b)}

    const clear = () => {setArray([])};

    return(array,setArray,add,remove,change,clear,fillter,sort)
}
