import React,{useEffect,useState} from 'react'

const PREFIX ='codepen-clone'


function LocalStorage(key,initialvalue) {
    const prefixkey=PREFIX+ key

const[value,setValue]=useState(()=>{
     const jsonvalue=localStorage.getItem(prefixkey)

    if(jsonvalue != null ) return JSON.parse(jsonvalue) 

    if(typeof initialvalue ==='function'){
        return initialvalue()
    }else{
        return initialvalue
    }
})  
  useEffect(()=>{
     localStorage.setItem(prefixkey,JSON.stringify(value))
  },[prefixkey,value])


  return [value,setValue]
}

export default LocalStorage
