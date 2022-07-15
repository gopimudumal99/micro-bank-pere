import React from 'react'
import {AiFillEye} from 'react-icons/ai'

interface props{
    logged:()=>void
}

const LoginComponent:React.FC<props> = ({logged}) =>{
    return <>
    <div className="login_container">
        <h1>Login</h1>
        <span>Please login to your account</span>
        <br />
        <form action="">
            <label htmlFor="email_phone">Email or Phone</label>
            <input type="text" name="email_phone" id="emial_phone" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <div id='pass_eye'>{<AiFillEye/>}</div>
            <span className='forgot_pass'>Forgot Password?</span>
        <button type='submit' className='register_btn'>Login</button>
        </form>
        <div className='reg_login_txt'>Dont't have an account? <span onClick={logged}>Create an Account</span></div>
    </div>
    </>
}

export default LoginComponent