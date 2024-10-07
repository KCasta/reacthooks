import React from "react";
import { useParams } from "react-router-dom";
const DescriptionPage = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>Movie Description</h3>
      <p>{movie.description}</p>
      <p>Rating:{movie.rating}</p>
    </div>
  );
};

export default DescriptionPage;
