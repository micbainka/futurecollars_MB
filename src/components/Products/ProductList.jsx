import React, { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import { LoadingComponent } from "./LoadingComponent/LoadingComponent";
import { ErrorMessage } from "./MessageComponents/ErrorMessage";
import { NoItemsMessage } from "./MessageComponents/NoItemsMessage";

export const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setShowError(false);

    fetch(`https://dummyjson.com/products/category/${props.category}`)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject();
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        console.log(data.products);
      })

      .catch(() => {
        setShowError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [props.category]);

  if (isLoading) return <LoadingComponent />;
  if (showError) return <ErrorMessage />;
  if (products.length === 0) return <NoItemsMessage />;

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
