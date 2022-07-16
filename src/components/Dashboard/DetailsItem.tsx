import React from "react";
import { AiFillEye } from "react-icons/ai";
import { MdDownload } from "react-icons/md";

interface props{
  item:{
    id:number,
    date:string,
    amount:string,
    status:"Approved"|"Rejected"
  }
}

const DetailsItem: React.FC<props> = ({item}) => {
  return (
    <ul className="details_main">
      <li>{item.id}</li>
      <li>{item.date}</li>
      <li>{item.amount}</li>
      <li className={item.status==="Approved"? 'status_green': 'status_red'}>{item.status}</li>
      <li>
        <span className="cursor">
        <AiFillEye size={22} color="red" /> &nbsp;
        </span>
        <span className="cursor">
        <MdDownload size={22}  color="red" />
        </span>
      </li>
    </ul>
  );
};

export default DetailsItem;
