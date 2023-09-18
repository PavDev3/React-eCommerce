import { useState  } from "react"
export function useFilters() {
    // Importante aprenderlo 
    const [filters, setFilters] = useState ({
      category: 'all',
      minPrice: 0,
    })
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
      return { filterProducts, setFilters }
}