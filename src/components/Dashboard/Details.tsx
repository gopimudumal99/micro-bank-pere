import React from 'react'
import DetailsCard from '../Cards/DetailsCard'
import DetailsItem from './DetailsItem'

interface detailsItemArr{
    id:number,
    date:string,
    amount:string,
    status:"Approved"|"Rejected"
}

let detailsArr:detailsItemArr[] = [
{id:2011002039111,date:"22-09-2021",amount:"1780",status:"Approved"},
{id:2011002039112,date:"19-09-2021",amount:"1890",status:"Approved"},
{id:2011002039113,date:"20-08-2021",amount:"5500",status:"Rejected"},
{id:2011002039114,date:"12-07-2021",amount:"2590",status:"Approved"},
{id:2011002039113,date:"08-07-2021",amount:"2800",status:"Rejected"},

]
const Details:React.FC = () => {


  return (
    <div className='details_container'>
        <ul className='details_header'>
            <li>Transaction ID</li>
            <li>Date</li>
            <li>Amount</li>
            <li>Status</li> 
            <li>Action</li>
        </ul>
        
        {detailsArr.map((item) => {
            return <DetailsItem item={item}/>
        })}
        <DetailsCard/>

    </div>
  )
}

export default Details