export const getProducts = async () => {
  const respond = await fetch("https://dummyjson.com/products");
  if (!respond.ok) throw new Error("Failed to fetch products");
  const data = await respond.json();
  return data.products;
};

export default async function ProductsPage() {
  const theProducts = await getProducts();
  const theFirstFive = theProducts.slice(0, 5);

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