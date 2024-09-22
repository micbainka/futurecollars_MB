import React from 'react';

export const CategorySelector = ({ selectedCategory, onChange }) => {
  const categories = ['furniture', 'tablets', 'groceries', 'non-existing-category'];

  return (
    <select value={selectedCategory} onChange={onChange}>
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

