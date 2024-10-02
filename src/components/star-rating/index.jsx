import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {rating > 9 || hover > 9 ? (
        <div className="text">
          You gave a {rating}/{noOfStars} star rating! 😁
        </div>
      ) : rating >= 5 || hover >= 5 ? (
        <div className="text">
          You gave a {rating}/{noOfStars} star rating! 🙂
        </div>
      ) : (
        <div className="text">
          You gave a {rating}/{noOfStars} star rating! 🤨
        </div>
      )}

      <div className="stars">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              size={50}
            />
          );
        })}
      </div>
    </div>
  );
}
