import { createContext, useState } from "react";

// 1. Crear contexto
export const CartContext = createContext()

// 2. Crear proveedor
export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        // Chequeamos que el producto no este en el carrito
        const productCartIndex = cart.findIndex(item => item.id === product.id)

        if (productCartIndex >= 0) {
            // usamos structured clone porque un spreed nos trae solo copia superficial
            const newCart = structuredClone(cart)
            newCart[productCartIndex].quantity += 1
            return setCart(newCart)
        }

        // Si el producto no esta en el carrito
        setCart(prevState => [...prevState, { ...product, quantity: 1 }])
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    
    const clearCart = () => { 
        setCart([])
      }

      return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }}>{children}
        </CartContext.Provider>
      )
}