import React, { useState } from "react";
import DetailsCard from "../Cards/DetailsCard";
import DetailsItem from "./DetailsItem";
import { detailsArr } from "../../Data/dataTypes";
interface Item {
  id: number;
  date: string;
  amount: string;
  status: "Approved" | "Rejected";
}

const Details: React.FC = () => {
  const [showTransaction, setShowTransaction] = useState<boolean>(false);
  const [transDetails, setTransDetails] = useState<any>({});

  const showDetails = (item: Item) => {
    if (!showTransaction) {
      setTransDetails(item);
      setShowTransaction(true);
    }
  };

  const hideShowDetails = () => {
    setShowTransaction(false);
  };

  return (
    <div className="details_container">
      <ul className="details_header">
        <li>Transaction ID</li>
        <li>Date</li>
        <li>Amount</li>
        <li>Status</li>
        <li>Action</li>
      </ul>

      {detailsArr.map((item, index) => {
        return (
          <DetailsItem key={index} item={item} showDetails={showDetails} />
        );
      })}
      {showTransaction && (
        <DetailsCard
          transDetails={transDetails}
          hideShowDetails={hideShowDetails}
        />
      )}
    </div>
  );
};

export default Details;
