import Navbar from "../HEADER/Navbar";
import { NavLink } from "react-router";
import { useAPIcontext } from "../../CONTEXT/MainApiContext";
import { useState, useEffect } from "react";

import CartCard from "./CartCard";
import NoCartData from "./NoCartData";

function Cart() {
  let { Copydata } = useAPIcontext();

  const [CartItems, setCartItems] = useState([]);
  const [TotalSum, setTotalSum] = useState(0);

  let finalPricesArray = CartItems.map((item) => item.FinalPrice);
  let totalFinalPrice = 0;
  
  for (let i = 0; i < finalPricesArray.length; i++) {
    totalFinalPrice += finalPricesArray[i];
  }

 useEffect(() => {
    setCartItems(Copydata.filter((elem) => elem.AddToCart === true));
    setTotalSum(totalFinalPrice)
  }, [Copydata]);


  function Removeall() { 
    setCartItems([])
     setTotalSum(0)
     }


  return (
    <>
      <Navbar></Navbar>
      <section className=" py-8  antialiased  md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold  sm:text-2xl">Shopping Cart</h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {CartItems?.length == 0 && <NoCartData />}
                {CartItems?.map((elem) => {
                  return (
                    <CartCard
                    totalFinalPrice={totalFinalPrice}
                      setTotalSum={setTotalSum}
                      CartItems={CartItems}
                      setCartItems={setCartItems}
                      id={elem.id}
                      price={elem.price}
                      FinalPrice={elem.FinalPrice}
                      quantity={elem.quantity}
                      image={elem.image}
                      description={elem.description}
                    />
                  )
                })}
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              {/* Calculate Amount  */}
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xl font-semibold ">Order summary</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal  ">
                        Original price
                      </dt>
                      <dd className="text-base font-medium ">${Math.floor(TotalSum)}</dd>
                    </dl>


                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal  ">Tax</dt>
                      <dd className="text-base font-medium text-[#f16464]">${TotalSum? Math.floor(TotalSum/85) : "2%"}</dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <p className="text-base font-bold ">Total</p>
                    <dd className="text-base font-bold ">${ Math.floor(TotalSum + TotalSum/85) }</dd>
                  </dl>
                </div>

                <button className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 ">
                  Proceed to Checkout
                </button>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal  "> or </span>
                  <NavLink
                    to="/products"
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
              <div className="flex w-full px-1 ">
                <button
                  onClick={Removeall}
                  className="bg-[#f16464] transition-all duration-300 text-white hover:bg-red-600 rounded-md p-1 flex-grow"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
