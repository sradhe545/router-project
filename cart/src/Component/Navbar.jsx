import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'

import {AiOutlineShoppingCart} from 'react-icons/ai'

import styles from './Navbar.module.css'
const Navbar = () => {
    const links = [
     
        {
          path: "/products",
          title: "Products"
        },
        {
          path: "/newarrival",
          title: "New Arrivals"
        },
        {
          path: "/everyarrival",
          title: "Everyday Arrivals"
        },
        {
          path: "/apparel",
          title: "Apparel"
        },

        {
          path: "/apothecary",
          title: "Apothecary"
        },
       
      ]
  return (
    <div className={styles.navbar}>
      <div>
     <Link to="/"><img src="https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_150x.png?v=1600190052" alt="logo"/></Link>

      </div>

    <div className={styles.out}>
        {
            links.map((el)=>{return (<>
            
            <NavLink className={styles.links} to={el.path}>{el.title}</NavLink>
            
            </>)})
        }
        
    </div>
    <div className={styles.icon}> 
        <AiOutlineSearch/>
        <Link to="/login"><FaUserAlt/></Link>
        <Link to="/cart"><AiOutlineShoppingCart/></Link>
     </div>
   
    
    </div>
  )
}

export default Navbar



{/* <NavLink to="/">Home</NavLink> */}


