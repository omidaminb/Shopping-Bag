import React, { useEffect, useState } from "react";
import ProductCard from "./product-card";
import useProductList from "../store/product-list";

const Products = () => {
  const { productList, actions } = useProductList();
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
      actions.addList(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsloading(false);
    }
  };
  useEffect(() => {
    productList.length <= 0 && fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="mt-25 w-full grid place-items-center">Loading ...</div>
    );
  } else if (error) {
    return <div>{error}</div>;
  } else if (productList) {
    return (
      <div className="container">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-x-4 gap-y-7 mt-10 ">
          {productList.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    );
  }
};

export default Products;
