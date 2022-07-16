import React from "react";
import CrossIcon from "../../assets/cross.png";
import {MdDownload} from 'react-icons/md';

const DetailsCard = () => {
  return (
    <div className="details_card">
      <div className="transaction_info">
        <div className="transaction_header">
          <h3>Transaction Details</h3>
          <img className="cursor" src={CrossIcon} alt="" />
        </div>
        <div className="transaction_main">
          <div className="transaction_left">
            <div className="transaction_left_item">
              <div>Transaction ID</div>
              <div>201100203911</div>
            </div>
            <div className="transaction_left_item">
              <div>Date</div>
              <div>22-09-2021</div>
            </div>
            <div className="transaction_left_item">
              <div>Status</div>
              <div>Approved</div>
            </div>
            <div className="transaction_left_item">
              <div>Comment</div>
              <div>Against invoice IN00021009</div>
            </div>
          </div>
          <div className="transaction_right">
            <div className="transaction_right_item">
              <div>Transfer To</div>
              <div>XYZ corporation</div>
            </div>
            <div className="transaction_right_item">
              <div>Amount</div>
              <div>1,780</div>
            </div>
            <div className="transaction_right_item">
                <div>Action</div>
                <div className="cursor"><MdDownload color='red' size='23' / ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
