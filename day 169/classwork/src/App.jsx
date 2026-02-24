import { useState } from 'react'
import './App.css'
import { AddToCartProvider } from "./context/CartContext.jsx";
import {Shop} from './components/Shop.jsx'
import {Cart} from './components/Cart.jsx'


function App() {

  const [seeCart, setSeeCart] = useState(false)
  return (
    <>
     <AddToCartProvider>
      <button style={{position:"fixed", top: "10px", right: "10px"}}onClick={() => setSeeCart(prev => !prev)}>{seeCart ? "Hide Cart" : "Show Cart"}</button>
      {!seeCart && <Shop />}
      {seeCart && <Cart />}
    </AddToCartProvider>
    </>
  )
}

export default App
