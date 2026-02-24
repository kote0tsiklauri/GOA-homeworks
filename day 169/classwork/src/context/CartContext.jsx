import { createContext, useState} from "react";
export const AddToCartContext = createContext()



export const AddToCartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    //not needed
    const [itemQuantity,setItemQuantaty] = useState(0)
    const [wholePrice,setWholePrice] = useState(0)

    
    const addToCart = (item) => {
        setCart(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                return [...prev, { ...item, quantity: 1 }];
            }
        });
        setItemQuantaty(prev => prev+1)
        setWholePrice(prev => prev + item.price)
    }
    const removefromCart = (item) => {
        setCart(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i =>
                i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
                ).filter(i => i.quantity > 0);
            } else {
                return prev;
            }
        })
        setItemQuantaty(prev => Math.max(0, prev - 1))
        setWholePrice(prev => Math.max(0, prev - item.price))
    }

    return(
        <AddToCartContext.Provider value={{ cart, addToCart ,removefromCart,itemQuantity,wholePrice}}>
            { children }
        </AddToCartContext.Provider>
    )
} 
