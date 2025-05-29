import React from "react";
import Button from "../button/button";

const BasketCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center space-y-3 border border-gray-500 rounded-sm p-1 ">
      <div>
        <img src={data.image} alt={data.title} className="w-25 h-auto" />
      </div>
      <div className="text-left p-3">
        <h3 className="line-clamp-2">{data.title}</h3>
        <p>
          <strong>Price:</strong> ${data.price}
        </p>
      </div>

      <div className="flex gap-1">
        <Button data={data} type={"decrease"}></Button>
        <Button data={data} type={"remove"}></Button>
        <Button data={data} type={"increase"}></Button>
      </div>

      <div>
        <strong>Quantity:</strong> ({data.quantity})
      </div>
    </div>
  );
};

export default BasketCard;
