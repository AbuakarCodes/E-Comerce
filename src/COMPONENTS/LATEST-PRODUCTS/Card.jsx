import { BsCart } from "react-icons/bs";
import { useAPIcontext } from "../../CONTEXT/MainApiContext";
import { useState } from "react";

function Card({ Star, price, image, description, id, AddToCart }) {
  const [isImageLoded, setisImageLoded] = useState(false);

  let AddToCArtButtonTrue =
    " transition-all duration-300  hover:cursor-not-allowed flex w-full gap-x-4  items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700";
  let AddToCArtButtonFalse =
    " transition-all duration-300 flex w-full gap-x-4  items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700";

  let { addToCartHandler } = useAPIcontext();

  function truncateText(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  }

  let SVG = (
    <div class="flex bg-[#F1EFF1] items-center animate-pulse justify-center w-full h-full  rounded-sm sm:w-96 ">
      <svg
        class="w-20 h-20 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="silver"
        viewBox="0 0 16 20"
      >
        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
      </svg>
    </div>
  );

  function CheackImageLode() {
    setisImageLoded(true);
  }

  return (
    <>
      <div className=" bg-white w-full  relative m-10 flex flex-col overflow-hidden rounded-lg border border-gray-100  shadow-md">
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl justify-center">
          {!isImageLoded && SVG}
          <img
            onLoad={() => {
              CheackImageLode();
            }}
            className="object-cover "
            src={image}
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {Math.floor(Math.random() * 50)}% OFF
          </span>
        </div>
        <div className="mt-4 px-2 pb-5">
          <a href="#">
            <p className=" opacity-65 text-xl tracking-tight text-slate-900">
              {truncateText(description, 7)}
            </p>
          </a>
          <div className="mt-2 mb-5 flex flex-col gap-y-3  items-start lg:flex-row lg:items-center justify-between ">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                ${Math.floor(price)}.{Math.floor(price * 0.7)}
              </span>
              <span className="text-sm text-slate-900 line-through">
                ${Math.floor(price * 1.2)}
              </span>
            </p>
            <div className="flex items-center">
              {[...Array(Star || 3)].map((_, index) => (
                <svg
                  key={index}
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                {Math.floor(Math.random() * 5)}.{Math.floor(Math.random() * 5)}
              </span>
            </div>
          </div>
          <button
            onClick={(e) => {
              addToCartHandler(e, id);
            }}
            className={AddToCart ? AddToCArtButtonTrue : AddToCArtButtonFalse}
          >
            <BsCart /> Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
