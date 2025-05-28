import React from "react";
import { Link, NavLink } from "react-router";
import clsx from "clsx";
import BasktWrapper from "../basket/baskt";
import useBasket from "../../store/basket";

const Header = () => {
  const basketItemsCount = useBasket((state) => state.items.length);
  const totalPrice = useBasket((state) => state.invoice.totalPrice);

  return (
    <section className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* left side -  */}
          <div className="flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                clsx(
                  "text-base px-4 py-2 rounded-lg bg-blue-50 transition-colors",
                  {
                    "opacity-50 pointer-events-none": isPending,
                    "bg-blue-600 text-white hover:bg-blue-700": isActive,
                    "text-gray-700 hover:bg-gray-100": !isActive && !isPending,
                  }
                )
              }
            >
              Home
            </NavLink>
            <nav className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Best Sellers
              </Link>
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Supermarket
              </Link>
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Amazing Offers
              </Link>
            </nav>
          </div>

          {/* right side*/}
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Sign in | Register
            </a>
            <div className="relative">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  2
                </span>
              </button>

              {/* Cart Dropdown */}
              <div className="absolute right-0 top-12 w-96 bg-white rounded-lg shadow-xl border border-gray-200">
                <div className="p-4">
                  <header className="flex justify-between items-center pb-4 border-b">
                    <h2 className="text-lg font-medium">
                      Shopping Cart{" "}
                      <span className="text-gray-500">{basketItemsCount}</span>
                    </h2>
                    <button className="text-gray-400 hover:text-gray-600 text-xl">
                      ×
                    </button>
                  </header>

                  {/* basket items */}
                  <main className="py-4 max-h-96 overflow-auto">
                    {/* Cart Items will be loaded here */}
                    <BasktWrapper />
                  </main>

                  <footer className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <div className="space-x-2 flex items-center ">
                        <button className="px-3 py-2 text-sm text-red-600 bg-red-50 hover:bg-red-50 rounded-lg inline-flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 mr-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                          Clear
                        </button>
                        <button className="px-3 py-2 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg inline-flex items-center">
                          Checkout
                        </button>
                      </div>
                      <div>
                        <p className="text-gray-800">
                          Total:{" "}
                          <span className="font-bold">${totalPrice}</span>
                        </p>
                      </div>
                    </div>
                    <div className="grid place-items-center">
                      <NavLink
                        to={"/basket"}
                        className={({ isActive, isPending }) =>
                          clsx(
                            "text-base px-4 py-2 rounded-md bg-blue-50 transition-colors", // استایل پیش‌فرض
                            {
                              "opacity-50 pointer-events-none": isPending, // حالت pending
                              "bg-blue-500 text-white hover:bg-blue-700":
                                isActive, // حالت active
                              "text-gray-700 hover:bg-gray-100":
                                !isActive && !isPending, // حالت نرمال
                            }
                          )
                        }
                      >
                        View Cart
                      </NavLink>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
