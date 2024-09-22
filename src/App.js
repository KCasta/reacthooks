import React from "react";
import MovieList from "./components/MovieList";
import animeMovies from "./movie";
import Filter from "./components/Filter";
import { Container } from "react-bootstrap";
const App = () => {
  return (
    <Container>
      <Filter />
      <MovieList movies={animeMovies} />
    </Container>
  );
};

export default App;
