import React, { createContext, useState } from 'react'

export const  ApiContext = createContext()
export const ApiContextProvider = ({children}) => {
  const [count,setCount] = useState(0)
  const handleCount=()=>{
    setCount(count+1)
  }
  return (
  <ApiContext.Provider value={{handleCount,count}}>
    {children}
  </ApiContext.Provider>
  )
}

