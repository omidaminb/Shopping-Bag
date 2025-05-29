import React from "react";
import Header from "../components/header/header";
import useBasket from "../store/basket";
import UserProducts from "../products/user-products";
import OrderSummary from "../components/ordr-summary/order-summary";

const BasketPage = () => {
  const basketItems = useBasket((state) => state.items);
  return (
    <section className="my-20">
      <div className="container">
        <div className="">
          {basketItems && basketItems.length ? (
            basketItems.map((item) => {
              return <UserProducts data={item} />;
            })
          ) : (
            <div className="w-full h-full grid place-items-center">
              Your cart is empty...
            </div>
          )}
        </div>
        <section className="relative">
          <OrderSummary />
        </section>
      </div>
    </section>
  );
};

export default BasketPage;
