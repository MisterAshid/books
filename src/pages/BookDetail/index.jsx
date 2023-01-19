import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = ({ books }) => {
  const loc = useParams();
  const book = books[loc.id];
  return (
    <div>
      <div>
        <img src={book.thumbnailUrl} alt="img" />
      </div>
      <div>
        <h1>{book.title}</h1>
        <h3>{book.authors}</h3>
      </div>
    </div>
  );
};

export default BookDetail;
