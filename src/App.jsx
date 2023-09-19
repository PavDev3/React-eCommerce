import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useState } from 'react'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { Footer } from './components/Footer'


function App() {
  const [products] = useState (initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
        
  return (
    <>
    <Header />
    <Products products={filteredProducts}/>
    <Footer />
    </>
  )
}

export default App
