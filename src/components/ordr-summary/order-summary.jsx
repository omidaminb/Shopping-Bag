import React from "react";
import useBasket from "../../store/basket";

const OrderSummary = () => {
  const toalPrice = useBasket((state) => state.invoice.totalPrice);

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-white shadow-lg border-t border-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-gray-600">Total Amount:</span>
          <span className="text-xl font-bold">${toalPrice}</span>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
