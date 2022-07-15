import React from 'react'
import { AiOutlineStar } from "react-icons/ai";

interface props{
    icon:any;
    text:string;
    isStar:boolean;
}


const ServicesCurrent:React.FC<props> = ({icon,text,isStar}) => {
  let starArr = [1, 2, 3, 4, 5];
  return (
    <div className="current_service">
    <div className="service_logo">
      <img src={icon} alt="" />
    </div>
    <h4>{text}</h4>
    { isStar && <div className="star_container">
      {starArr.map((star) => {
        return (
          <div className="starIcon " >
            <AiOutlineStar color='gray' />
          </div>
        );
      })}
    </div>
  }
  </div>
  )
}

export default ServicesCurrent