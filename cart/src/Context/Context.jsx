import React, { useState,useEffect } from 'react'
import { createContext } from 'react'

export const Context=createContext()
const ContextProvider = ({children}) => {
    const  [isAuth,setIsAuth]=useState(false)
    const [page,setPage]=useState(1)
    const [limit,setLimit]=useState(5)
    const [type,setType]=useState("asc")
    const [cart,setCart]=useState([])
    function handleToggle(){
            setIsAuth(!isAuth)
    }
    // function handleSelect(e){
    //   setLimit(e.target.value)
    // }
    // const paginate=()=>{
    //   setPage(page)
    //   console.log(page)
    // }
    
    function getUsers()
    {
      return fetch(`https://warm-sea-77698.herokuapp.com/newArrival?_page=${page}&_limit=${limit}&_sort=price&_order=${type}`).then((res)=>res.json())
    }
    const [data,setData]=useState([])

function getCart(){
  return fetch(`https://warm-sea-77698.herokuapp.com/cart`).then((res)=>res.json())
  .then((res)=>setCart(res.data))
  console.log(cart)
}
    const handleAdd=(el)=>{
      alert("Item added")
      console.log()
       return  fetch("https://warm-sea-77698.herokuapp.com/cart",{
           method:"POST",
           headers:{
               "Content-Type": "application/json"
           },
           body:JSON.stringify(el)
          
       }).then(()=>getCart());
      
   }




    useEffect(()=>{
      getUsers(page,limit,type).then((res)=>{ setData(res);
      console.log(data)})
    },[page,limit,type])
  return (
    <>
        <Context.Provider value={{handleToggle,page,isAuth,data,setPage,setLimit,setType,handleAdd}}>{children}</Context.Provider>
    </>
  )
}

export default ContextProvider
