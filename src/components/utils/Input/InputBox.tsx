import React,{ChangeEvent} from 'react'
import {AiFillEyeInvisible} from 'react-icons/ai';
// import {AiFillEye} from 'react-icons/ai'
import "./Input.css"
interface props{
    type?:string;
    label:string;
    isPass:boolean;
    id:string;
    value:string;
    handleChange:(e:ChangeEvent)=>void;
}


const InputBox:React.FC<props> = ({type,label,isPass,id,value,handleChange}) => {

  return (
    <div className='input_container'>
        <label htmlFor={id}>{label}</label>
        <input onChange={(e)=>handleChange(e)} className={type==="date"?'input_box input_date':"input_box"} type={type} name={id} id={id} value={value} required/>
       {isPass && <div className='eyeIcon cursor'>
            <AiFillEyeInvisible size={23} />
        </div>
        }
    </div>
  )
}

export default InputBox