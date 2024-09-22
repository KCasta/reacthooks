import React from "react";

const Filter = () => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <h1>Filter Movies</h1>
      <div>
        <label>Title</label>
        <input type="text" />
      </div>
      <div>
        <label>Rating</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default Filter;
