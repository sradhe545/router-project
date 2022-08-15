import React from 'react'
import Navbar from './Navbar'
import styles from './Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import UncontrolledExample from './Corosel'
import Footer from './Footer';



const Home = () => {
  return (
    <>
    <div>
      <p className={styles.head}>FREE US SHIPPING $199 | EASY RETURNS | WORTH HOLDING ONTO</p>
    </div>
    <UncontrolledExample/>
   <Footer/>
   </>
  )
}

export default Home