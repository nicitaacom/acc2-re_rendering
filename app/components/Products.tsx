'use client'
import { useCallback, useState } from "react"
import Product from "./Product"

 const products = [
    {
      id:'hifh40',
    },
    {
      id:'nosnf0',
    },
    {
      id:'fdpsmp',
    },
    {
      id:'jidfcn2',
    },
]	

export default function Products () {

  const [quantity,setQuantityState] = useState<Record<string,number>>({
    "hifh40":0,
    "nosnf0":0,
    "fdpsmp":0,
    "jidfcn2":0,
  })

  const setQuantity = useCallback((id:string,value:number) => 
    setQuantityState((prev) => ({
      ...prev,
      [id]:value
    })),[])

  

 

return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Product {...product} quantity={quantity[product.id]} setQuantity={setQuantity}/>
          </li>
        ))}
      </ul>
    </div>
)
}