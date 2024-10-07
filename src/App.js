import React from "react";
import MovieList from "./components/MovieList";
import animeMovies from "./movie";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DescriptionPage from "./pages/DescriptionPage";
import TrailerPage from "./pages/TrailerPage";
const App = () => {
  const [originalMovies, setOriginalMovies] = React.useState(animeMovies);
  // Initialize the state for the filtered movies
  const [filteredMovies, setFilteredMovies] = React.useState(originalMovies);
  const handleFilterChange = (title, rating) => {
    // Filter the movies based on the title and rating
    let filtered = originalMovies;
    if (title && !rating) {
      filtered = animeMovies.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    // Filter the movies based on the rating
    if (rating && !title) {
      filtered = animeMovies.filter((movie) => movie.rating >= rating);
    }

    if (title && rating) {
      filtered = animeMovies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(title.toLowerCase()) &&
          parseFloat(movie.rating) >= parseFloat(rating)
      );
    }
    setFilteredMovies(filtered);
  };
  // Handle the form submission
  const addMovieHandler = (inputValues) => {
    setOriginalMovies([...originalMovies, inputValues]);
    setFilteredMovies([...filteredMovies, inputValues]);
  };
  // Return the main component
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <div className="d-flex justify-content-around">
                {/* // Add the Filter component */}
                <Filter onFilterChange={handleFilterChange} />
                {/* // Add the AddMovie component */}
                <AddMovie onAddMovie={addMovieHandler} />
              </div>
              <MovieList movies={filteredMovies} />
              {/* //passing the filtered movies to the MovieList component */}
            </Container>
          }
        ></Route>
        <Route
          path="/description/:title"
          element={<DescriptionPage movies={filteredMovies} />}
        />
        <Route
          path="/trailer/:title"
          element={<TrailerPage movies={filteredMovies} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
