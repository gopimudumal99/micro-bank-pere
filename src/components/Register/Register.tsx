import React from 'react'
import './Register.css'

import RegisterComponent from './RegisterComponent';
import LoginComponent from './LoginComponent';

interface props{
    isLogin:boolean;
    logged:() => void
}

const Register:React.FC<props> = ({isLogin,logged}) =>{
  return (
    <div className='register_container'>
        <div className='register_left'> </div>
        {isLogin? <LoginComponent logged={logged}/> :<RegisterComponent logged={logged}/>}
    </div>
  )
}

export default Register