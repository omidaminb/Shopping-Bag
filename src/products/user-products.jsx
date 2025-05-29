import React from "react";
import Button from "../components/button/button";

const UserProducts = ({ data }) => {
  return (
    <div className="mb-5 pb-5">
      <div className="flex gap-2 ">
        <div className=" p-2.5 w-75 sm:w-85 md:w-90 lg:w-100 h-50 sm:h-70 md:h-85 lg:h-100 overflow-hidden flex justify-center items-center border border-black">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-100 md:grow">
          <h3 className="line-clamp-2 mb-4">
            <strong>Title: </strong>
            {data.title}
          </h3>
          <p className="line-clamp-5">{data.description}</p>
        </div>
      </div>
      <div className="flex gap-5 mt-4">
        <div className="flex items-center gap-2">
          <Button data={data} type={"decrease"} />
          <Button data={data} type={"remove"} />
          <Button data={data} type={"increase"} />
        </div>
        <div>
          <div>
            <strong>Price: </strong>
            <span className="mr-5">${data.price}</span>
            <span className="mr-5">
              <strong>Quantity: </strong>
              {data.quantity}
            </span>
            <span>
              <strong>Total: </strong>$
              {Number((data.price * data.quantity).toFixed(2))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProducts;
