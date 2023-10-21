'use client'

import { Dispatch, SetStateAction, createContext, useState } from "react"


interface IContext {
  quantity:number
  setQuantity:Dispatch<SetStateAction<number>>
}


export const ProductContext = createContext({} as IContext)

export function ProductProvider({children}:{children:React.ReactNode}) {

  const [quantity,setQuantity] = useState(0)

  return (
    <ProductContext.Provider value={{quantity,setQuantity}}>
      {children}
    </ProductContext.Provider>
  )
}
