import React from 'react'
import Product from './types'

interface props{
  product:Product
}
const ProductRow:React.FC<props> = ({product}) => {
  return (
      <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>${product.price}</td>
    </tr>
  )
}

export default ProductRow