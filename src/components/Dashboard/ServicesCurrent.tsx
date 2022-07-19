import React from "react";
import StarRating from "../utils/Star/StarRating";
interface props {
  icon: any;
  text: string;
  isStar: boolean;
  rating: number;
  dispatchFun: (rating: number) => void;
}

const ServicesCurrent: React.FC<props> = ({
  icon,
  text,
  isStar,
  rating,
  dispatchFun,
}) => {
  return (
    <div className="current_service">
      <div className="service_logo">
        <img src={icon} alt="" />
      </div>
      <h4>{text}</h4>
      {isStar && <StarRating rating={rating} ratingFun={dispatchFun} />}
    </div>
  );
};

export default ServicesCurrent;
