import useBasket from "../store/basket";

const ProductCard = ({ data }) => {
  const actions = useBasket((state) => state.actions);
  const quantity = useBasket(
    (state) => state.items.find((item) => item.id === data.id)?.quantity || 0
  );
  console.log(" ProductCard ~ quantity:", quantity);

  return (
    <div className="flex flex-col bg-gray-300 border border-gray-600 p-2.5 rounded-2xl">
      <div className="p-2.5 h-100 overflow-hidden grid place-items-center mb-5">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex flex-col grow-1 mb-5">
        <h2 className="h-16 text-2xl line-clamp-2 mb-5 font-extrabold">
          {data.title}
        </h2>
        <p className="grow-1 line-clamp-5">{data.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <p>
          <span className=" font-bold mr-1">Price:</span> {data.price}$
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => actions.removeFromBasket(data)}
            className="border border-red-500 text-red-600 px-3.5 py-2 rounded-lg w-fit cursor-pointer"
          >
            -
          </button>
          <p className="border border-orange-500 text-orange-600 px-2 py-2 rounded-lg w-fit">
            {quantity}
          </p>
          <button
            onClick={() => actions.addToBasket(data)}
            className="border border-green-500 text-green-600 px-3 py-2 rounded-lg w-fit cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
