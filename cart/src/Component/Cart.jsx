import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from "./Cart.module.css"

const Cart = () => {
    const [data,setData]=useState([])
    // const [qty,setQty]=useState(1)
    function getUsers()
    {
      return fetch(`https://warm-sea-77698.herokuapp.com/cart`).then((res)=>res.json())
      .then((res)=>{ setData(res)})
    }
    
      const  deleteTodo=(id)=>{
        return  fetch(`https://warm-sea-77698.herokuapp.com/cart/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json"
            }
            
        }).then(()=>getUsers());
    }
    useEffect(()=>{
        getUsers()
    },[])

        const Su= ()=>data.reduce((sum,el)=>{
        return (sum+(el.price))
        },0)
  return (
    <div>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </table>
  {
    data.map((el)=>{
        return(
            <>            
            <table>                
                <tr>
                    <td><img style={{height:"100px" ,width:"100px"}} src={el.img} alt={el.img}/></td>
                    <td>{el.title}</td>
                    <td>$ {el.price}</td>
                    <td><button onClick={()=>deleteTodo(el.id)}>REMOVE</button></td>                   
                </tr>              
            </table>        
            </>
        )
    })
  }
  <h2>Total Rs. <Su/></h2>
  <button>Pay Now</button>
    </div>
  )
}
export default Cart