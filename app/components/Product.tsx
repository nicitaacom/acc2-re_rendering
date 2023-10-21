'use client'

import { memo, useContext, useState } from "react"

export interface IProduct {
  id:string
  quantity:number
  setQuantity:(id:string,value:number) => void
}

function Product ({...product}:IProduct) {
  console.log("product re-rendering")
  
return (
    <div>
      Quantity:{product.quantity}
      <button className="px-4 py-2 bg-transparent border-[1px] border-gray-500 rounded" onClick={() => product.setQuantity(product.id,product.quantity+1)}>
        +
      </button>
    </div>
)
}

export default memo(Product)