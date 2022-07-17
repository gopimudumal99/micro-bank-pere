import React, { ChangeEvent, FormEvent, useState } from 'react';
// import {AiFillEye} from 'react-icons/ai'
import Button from '../utils/Button/Button';
import InputBox from '../utils/Input/InputBox';
import {useNavigate} from 'react-router-dom';
import {getUserByLogin} from "../../api/apis";
import {UserCredential} from "../../Data/data";

const LoginComponent:React.FC = () =>{
    let user:UserCredential = {email_phone:"",password:""}

    const [state,setState] = useState<UserCredential>(user)

    let navigate = useNavigate()

    const handleChage =(e:ChangeEvent)=>{
        const {value,name} = e.target as HTMLInputElement
        setState({
            ...state,
            [name]:value
        })
    }

    const handleSubmit = async(e:FormEvent) =>{
        e.preventDefault()
       let user = await getUserByLogin(state)
       if(user.length > 0){
           console.log(user)
           navigate("/dashboard")
       }else{
        alert("invalid credential please try again")
       }
    }

    return <>
    <div className='register_container'>
        <div className='register_left'> </div>
    <div className="login_container">
        <h1>Login</h1>
        <span>Please login to your account</span>
        <br />
        <form action="" onSubmit={handleSubmit}>
            <InputBox type={'email'} id={"email_phone"} label={'Email or Phone'} isPass={false} value={state.email_phone}handleChange={handleChage}/>
            <InputBox type={'password'} id={"password"} label={'Password'} isPass={true} value={state.password} handleChange={handleChage}/>
            <span className='forgot_pass'>Forgot Password?</span>
            <Button content={'Login'}/>
        </form>
        <div className='reg_login_txt'>Dont't have an account? <span onClick={()=>navigate("/")}>Create an Account</span></div>
    </div>
    </div>
    </>
}

export default LoginComponent