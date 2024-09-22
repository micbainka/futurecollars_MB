import React from "react";
import "./ProductItem.css";

export const ProductItem = ({ product }) => {
  return (
    <div className="single-item">
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "100px" }}
        loading="lazy"
      />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </div>
    </div>
  );
};
