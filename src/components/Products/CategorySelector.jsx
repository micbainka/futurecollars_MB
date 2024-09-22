import React from "react";

export const CategorySelector = ({ selectedCategory, onChange }) => {
  const categories = [
    "furniture",
    "tablets",
    "groceries",
    "non-existing category",
  ];

  return (
    <div>
      <label for="category">Select a category:</label>
      <select
        id="category"
        style={{ margin: "10px", height: "30px" }}
        value={selectedCategory}
        onChange={onChange}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
