import React from 'react'
import Product from './types'
import ProductRow from './ProductRow'
interface props{
   products:Product[]
}
const ProductsList:React.FC<props> = ({products}) => {
  return (
    <div >
   <table border={2}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default ProductsList