import React from 'react'
import InputBox from '../utils/Input/InputBox'
import Button from "../utils/Button/Button";
import {useNavigate} from 'react-router-dom'


const RegisterComponent:React.FC = () =>{
    let navigate = useNavigate()

    return <>
    <div className='register_right'>
        <h1>Create an Account</h1>
        <form action="">
            <InputBox type={"text"} label={"Full Name"} id={"full_name"} isPass={false} />
            <InputBox type={"date"} label={"Date of Incorporation"} id={"date_incorporation"} isPass={false} />
            <InputBox type={"email"} label={"Email"} id={"email"} isPass={false} />
            <InputBox type={"password"} label={"Password"} id={"password"} isPass={true} />
            <InputBox type={"password"} label={"Confirm Password"} id={"confirm_pass"} isPass={true} />
            <Button content='Create an Account'/>
        </form>
        <div className='reg_login_txt' onClick={()=>navigate("/login")}>Already have an account? <span>Login</span></div>
    </div>
    </>
}

export default RegisterComponent