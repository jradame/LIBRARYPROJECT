import React from "react";
import Rating from "./Rating";

const Book = ({ book }) => {
  const {
    id,
    title,
    url,
    originalPrice,
    salePrice,
    rating
  } = book;

  return (
    <div className="book">
      <a href={`/books/${id}`}>
        <figure className="book__img--wrapper">
          <img src={url} alt={title} className="book__img" />
        </figure>
      </a>
      <div className="book__title">
        <a href={`/books/${id}`} className="book__title--link">
          {title}
        </a>
      </div>
      <Rating rating={rating} />
      <div className="book__price">
        {salePrice ? (
          <>
            <span className="book__price--normal">
              ${originalPrice.toFixed(2)}
            </span>
            ${salePrice.toFixed(2)}
          </>
        ) : (
          <>${originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
};

export default Book;




