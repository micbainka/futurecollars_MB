import React, { useState } from "react";
import "./App.css";
import { ProductList } from "./components/Products/ProductList";
import { AppBarComponent } from "./components/Header/AppBarComponent";
import { CategorySelector } from "./components/Products/CategorySelector";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("furniture");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <AppBarComponent />
      <div className="App-body">
        <CategorySelector
          className="category-selector"
          selectedCategory={selectedCategory}
          onChange={handleCategoryChange}
        />
        <ProductList category={selectedCategory} />
      </div>
    </div>
  );
};

export default App;
