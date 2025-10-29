
import React, {createContext, useState}from 'react'
export const DataContext=createContext();

function DataProvider({children}) {
    const[Html,setHtml]=useState('')
    const[css,setCss]=useState('')
    const[js,setJs]=useState('')
  return (
   <DataContext.Provider value={{
    Html,
    setHtml,
    css,
    setCss,
    js,
    setJs 
}}>{children} </DataContext.Provider>)
}

export default DataProvider

