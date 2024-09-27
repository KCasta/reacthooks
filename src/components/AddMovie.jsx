import React from "react";
import { useState } from "react";
const AddMovie = ({ onAddMovie }) => {
  // Initialize  the state for the input values
  const [inputValues, setInputValues] = useState({
    title: "",
    rating: "",
    description: "",
    posterUrl: "",
  });
  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(inputValues);
  };
  //   Return the form with the input fields
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={inputValues.title}
          onChange={(e) =>
            setInputValues({ ...inputValues, title: e.target.value })
          }
        />
      </div>
      <div>
        <label>Rating</label>
        <input
          type="number"
          min={1}
          max={5}
          value={inputValues.rating}
          onChange={(e) =>
            setInputValues({ ...inputValues, rating: e.target.value })
          }
        />
      </div>

      <div>
        <label>Poster URL</label>
        <input
          type="text"
          value={inputValues.posterUrl}
          onChange={(e) =>
            setInputValues({ ...inputValues, posterUrl: e.target.value })
          }
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={inputValues.posterUrl}
          onChange={(e) =>
            setInputValues({ ...inputValues, posterUrl: e.target.value })
          }
        />
      </div>
      {/* //       Add a button to submit the form */}
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
