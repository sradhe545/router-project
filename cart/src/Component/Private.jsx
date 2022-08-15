import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Context } from '../Context/Context'

const Private = ({children}) => {
    const {isAuth}=useContext(Context)
    
        if(!isAuth)
        {
            return <Navigate to="/login"/>
        }
                return children
        

  
  
}

export default Private