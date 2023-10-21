'use client'

import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

export interface IProduct {
  quantity:number
}

export default function Product ({...product}:IProduct) {
  console.log("product re-rendering")
  const {quantity,setQuantity} = useContext(ProductContext)
return (
    <div>
      Quantity:{product.quantity}
      <button className="px-4 py-2 bg-transparent border-[1px] border-gray-500 rounded"
      onClick={() => setQuantity(quantity+1)}>
        +
      </button>
    </div>
)
}