import React, { useState } from 'react'
import productsdata from './products.json'
import Product from './types'
import ProductsList from './ProductsList'
import '../App.css'
const AllProducts = () => {
    const [products]=useState<Product[]>(productsdata)
   return (
    <> <div >
    <h1>Product List</h1>
    <ProductsList products={products} />
  </div>

    </>
  )
}

export default AllProducts