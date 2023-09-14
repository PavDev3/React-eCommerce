import './Products.css'
import { AddToCartIcon } from './Icons.jsx'
import PropTypes from 'prop-types';

export function Products ({ products }) {
    return (
        <main className='products'>
            <ul>
                {products.map(product => (
                    <li key={product.id}>                    
                        <h4 className='title'>{product.title}</h4>
                        <img src={product.thumbnail} alt={product.title}/>
                        <p>{product.description}</p>
                        <p className='price'>${product.price}</p>
                        <button className='buttonCart'><AddToCartIcon/></button>
                    </li>
                ))}                          
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