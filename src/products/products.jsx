import React, { useEffect, useState } from "react";
import ProductCard from "./product-card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsloading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("دیتا مشکل دارد");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsloading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else if (products) {
    return (
      <div className="container">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-x-4 gap-y-7 mt-10 ">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    );
  }
};

export default Products;
