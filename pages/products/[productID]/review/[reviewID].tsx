import { useRouter } from 'next/router'
import React from 'react'

function ReviewID() {
    const router =useRouter();
    const {productID,reviewID}=router.query
  return (
    <div>The product {productID} is very good because review is {reviewID}</div>
  )
}

export default ReviewID