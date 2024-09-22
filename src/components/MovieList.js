import React from "react";
import MovieCard from "./MovieCard";
import { Col, Row } from "react-bootstrap";

// MovieList component that takes a list of movies and renders them using the MovieCard component
const MovieList = ({ movies }) => {
  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id} md={3} sm={6}>
          {/* //passing the movie object properties to the MovieCard component */}
          <MovieCard
            key={movie.id}
            posterUrl={movie.posterUrl}
            title={movie.title}
            rating={movie.rating}
            description={movie.description}
          />
        </Col>
      ))}
    </Row>
  );
};
//guessing that the movie object has the following properties: id, posterUrl, title, rating, description
export default MovieList;
