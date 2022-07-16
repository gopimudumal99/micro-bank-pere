import React from 'react'
import {AiFillEyeInvisible} from 'react-icons/ai';

interface props{
    type?:string;
    label:string;
    isPass:boolean;
}


const InputBox:React.FC<props> = ({type,label,isPass}) => {

  return (
    <div className='input_container'>
        <label htmlFor="">{label}</label>
        <input className='input_box' type={type} name="" id="" />
       {isPass && <div className='eyeIcon cursor'>
            <AiFillEyeInvisible size={23} />
        </div>
        }
    </div>
  )
}

export default InputBox