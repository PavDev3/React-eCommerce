import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'



function App() {
  const [products] = useState (initialProducts)
  const [filters, setFilters] = useState ({
    category: 'all',
    minPrice: 0,
  })

  // Importante aprenderlo 
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        // Filtramos los productos por categoría
        product.price >= filters.minPrice && (
          // filtramos los productos que sean all o si tienen la categoría seleccionada
          filters.category === 'all' ||
          filters.category === product.category
          )
        )
      })
    }

    const filteredProducts = filterProducts(products)
        
  return (
    <>
    <Header changeFilters={setFilters}  />
    <Products products={filteredProducts}/>
    </>
  )
}

export default App
