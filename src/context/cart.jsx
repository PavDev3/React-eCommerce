import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart"
import PropTypes from 'prop-types';


// 1. Crear contexto
export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const minusFromCart = product => dispatch({
    type: 'MINUS_FROM_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToCart, removeFromCart, clearCart, minusFromCart }
}

// la dependencia de usar React Context
// es MÍNIMA
export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart, minusFromCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart,
      minusFromCart,
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
    children: PropTypes.node, // Puedes utilizar PropTypes.node para representar cualquier contenido React válido.
  };