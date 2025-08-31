// src/components/ui/Rating.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {new Array(5).fill(0).map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={index < rating ? solidStar : regularStar}
          className="rating__star"
        />
      ))}
    </div>
  );
};

export default Rating;



