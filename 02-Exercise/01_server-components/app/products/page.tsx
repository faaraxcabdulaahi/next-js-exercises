import React from "react";

const ProductPage = async () => {
  const respond = await fetch("https://dummyjson.com/products");
  if (!respond.ok) throw new Error("Failed to fetch products");
  const data = await respond.json();
  const theFirstFive = data.products.slice(0, 5);
  return (
    <div>
      <h1>Top Five Products</h1>
      <ul>
        {theFirstFive.map((product: any) => (
          <li key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
