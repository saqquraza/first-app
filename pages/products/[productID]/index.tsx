import { useRouter } from 'next/router'
import React from 'react'

function ProductDetail() {
  const router=useRouter();
  const productID=router.query.productID
  return (
    <div>
        <h2>Product {productID} is very nice</h2>
    </div>
  )
}

export default ProductDetail