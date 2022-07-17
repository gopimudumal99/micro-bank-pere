import React from 'react'
// import {AiFillEye} from 'react-icons/ai'
import Button from '../utils/Button/Button'
import InputBox from '../utils/Input/InputBox'
import {useNavigate} from 'react-router-dom'

const LoginComponent:React.FC = () =>{
    let navigate = useNavigate()

    return <>
    <div className='register_container'>
        <div className='register_left'> </div>
    <div className="login_container">
        <h1>Login</h1>
        <span>Please login to your account</span>
        <br />
        <form action="">
            <InputBox type={'email'} id={"email_phone"} label={'Email or Phone'} isPass={false} value={""}handleChange={()=>{}}/>
            <InputBox type={'password'} id={"password"} label={'Password'} isPass={true} value={""} handleChange={()=>{}}/>
            <span className='forgot_pass'>Forgot Password?</span>
            <div onClick={()=>navigate("/dashboard")}>
            <Button content={'Login'}/>
            </div>
        </form>
        <div className='reg_login_txt'>Dont't have an account? <span onClick={()=>navigate("/")}>Create an Account</span></div>
    </div>
    </div>
    </>
}

export default LoginComponent