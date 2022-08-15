import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Context } from '../Context/Context'

const Login = () => {
    const{handleToggle,isAuth}=useContext(Context)
    if(isAuth)
    return <Navigate to="/"/>
  return (
    <div>
      <input placeholder='Enter Email'/>

      <input type="password" placeholder='Enter Password'/>

        <button onClick={handleToggle}>Click Me</button>
    </div>
  )
}

export default Login