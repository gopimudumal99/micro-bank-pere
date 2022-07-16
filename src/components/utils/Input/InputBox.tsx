import React from 'react'
import {AiFillEyeInvisible} from 'react-icons/ai';
// import {AiFillEye} from 'react-icons/ai'
import "./Input.css"
interface props{
    type?:string;
    label:string;
    isPass:boolean;
    id:string;
}


const InputBox:React.FC<props> = ({type,label,isPass,id}) => {

  return (
    <div className='input_container'>
        <label htmlFor={id}>{label}</label>
        <input className={type==="date"?'input_box input_date':"input_box"} type={type} name={id} id={id} />
       {isPass && <div className='eyeIcon cursor'>
            <AiFillEyeInvisible size={23} />
        </div>
        }
    </div>
  )
}

export default InputBox