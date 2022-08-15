
import React from 'react'

import { Link } from 'react-router-dom'
import styles from './Products.module.css'
import { useContext } from 'react'
import { FcRating } from "react-icons/fc";
import { Context } from '../Context/Context'

const NewArrival = () => {
    const{data,getUsers,page,setPage,setLimit,setType,handleAdd}=useContext(Context)
   
  return (
    <>
    <button disabled={page===1} onClick={()=>setPage(page-1)}>PREV</button>
    <button>{page}</button>
    <button onClick={()=>setPage(page+1)}>NEXT</button>


<select name="" id="" onChange={(e)=>setLimit(e.target.value)}>
  <option value="">Select</option>
  <option value="5">5</option>
  <option value="10">10</option>
</select>


<button onClick={()=>setType("asc")}>ASC</button>
<button onClick={()=>setType("desc")}>DESC</button>
    <div className={styles.outer1 }>
         {
            data.map((el)=>{return(
           <div className={styles.outer }>
              
              <Link to={`/newarrival/${el.id}`}><img
              style={{ height: "300px", width: "350px" }}
              src={el.img}
              alt={el.img}
            /></Link>
            <p>{el.title}</p>
            <p  className={styles.sold }>{el.sold_by}</p>
            <div className={styles.price }>
                <p>${el.price}</p>
               
            </div>

            
            
            <button onClick={()=>handleAdd(el)}>ADD TO CART</button>
            
            
            </div>
            )})
         }
         
    </div>
    </>
  )
}

export default NewArrival









