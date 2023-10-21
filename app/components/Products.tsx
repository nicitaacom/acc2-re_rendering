'use client'
import Product from "./Product"

	

export default function Products () {

  const products = [
    {
      quantity:1
    },
    {
      quantity:2
    },
    {
      quantity:3
    },
    {
      quantity:4
    },
  ]

return (
    <div>
      <ul>
        {products.map(product => (
          <li key={crypto.randomUUID()}>
            <Product {...product}/>
          </li>
        ))}
      </ul>
    </div>
)
}