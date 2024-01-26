import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductScreens() {
    const {id: productId} = useParams()
    const product = product.find((p)=>p._id===productId)
    console.log(product)
  return (
    <div>
        Product
    </div>
  )
}
