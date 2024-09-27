import React from "react";
import { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    rating: "",
  });
  return (
    <div style={{ marginBottom: "10px" }}>
      <h1>Filter Movies</h1>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={inputValues.title}
          onChange={(e) => {
            // Update the input values
            setInputValues({ ...inputValues, title: e.target.value });
            // Call the onFilterChange function
            onFilterChange(e.target.value, inputValues.rating);
            console.log(inputValues.title, inputValues.rating);
          }}
        />
      </div>
      <div>
        <label>Rating</label>
        <input
          type="number"
          min={1}
          max={5}
          // step={0.5}
          value={inputValues.rating}
          onChange={(e) => {
            setInputValues({ ...inputValues, rating: e.target.value });
            onFilterChange(inputValues.title, e.target.value);
            console.log(inputValues);
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
