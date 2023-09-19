import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import PropTypes from 'prop-types';
import { useCart } from '../hooks/useCart';

export function Products ({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.slice(0,10).map(product => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                    <li key={product.id}>                    
                        <h4 className='title'>{product.title}</h4>
                        <img src={product.thumbnail} alt={product.title}/>
                        <p>{product.description}</p>
                        <p className='price'>${product.price}</p>
                        <button onClick={() => 
                        isProductInCart 
                        ? removeFromCart(product)
                        : addToCart(product)}
                        className='buttonCart'>
                            {
                                isProductInCart 
                                ? <RemoveFromCartIcon />
                                : <AddToCartIcon />
                            }
                        </button>
                    </li>
                )
                })}                          
            </ul>
        </main>
    )
}

Products.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
  };  