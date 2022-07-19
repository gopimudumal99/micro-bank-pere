import React, { useState, useEffect } from "react";
import "./StarRating.css";
import { AiFillStar } from "react-icons/ai";
//&#9733; star hrml
interface props {
  rating: number;
  ratingFun: (rating: number) => void;
}
const StarRating: React.FC<props> = ({ rating, ratingFun }) => {
  const [ratingValue, setRatingValue] = useState(rating);
  const [hover, setHover] = useState(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    ratingFun(ratingValue);
  }, [ratingValue, ratingFun]);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            id="textBtn"
            type="button"
            key={index}
            className={index <= (ratingValue || hover) ? "on" : "off"}
            onClick={() => flag && setRatingValue(index)}
            onMouseMove={() => flag && setHover(index)}
            onMouseLeave={() => flag && setHover(index)}
            onDoubleClick={() => {
              setHover(0);
              setRatingValue(0);
              setFlag(!flag);
            }}
          >
            <AiFillStar size={25} />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
