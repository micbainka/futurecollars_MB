import React, { useState } from 'react';
import { ProductList } from './components/Products/ProductList';
import { AppBarComponent } from './components/Header/AppBarComponent';
import { CategorySelector } from './components/Products/CategorySelector';


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('furniture');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
     <AppBarComponent />
      <CategorySelector selectedCategory={selectedCategory} onChange={handleCategoryChange} />
      <ProductList category={selectedCategory} />
    </div>
  );
};

export default App;