import React from 'react'
import {AiFillEye} from 'react-icons/ai'

interface props{
    logged:()=>void
}

const RegisterComponent:React.FC<props> = ({logged}) =>{
    return <>
    <div className='register_right'>
        <h1>Create an Account</h1>
        <form action="">
            <label htmlFor="full_name">Full Name</label>
            <input type="text" name="full_name" id="full_name" />
            <br /><br />
            <label htmlFor="date_incorporation">Date of Incorporation</label>
            <input type="date" name="date_incorporation" id="date_incorporation" />
            <br /><br />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <br /><br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <span id='pass_eye'>{<AiFillEye/>}</span>
            <br /><br />
            <label htmlFor="confirm_pass">Confirm Password</label>
            <input type="password" name="confirm_pass" id="confirm_pass" />
            <span id='pass_eye'>{<AiFillEye/>}</span>

            <button className='register_btn'>Create an Account</button>
        </form>
        <div className='reg_login_txt' onClick={logged}>Already have an account? <span>Login</span></div>
    </div>
    </>
}

export default RegisterComponent