import { useAPIcontext } from "../../../CONTEXT/MainApiContext";
import { NavLink, useParams } from "react-router";
import { BsCart } from "react-icons/bs";
import Navbar from "../../HEADER/Navbar";

function IndivisualProduct() {
  let { id } = useParams();

  let {  MainAPILoding, addToCartHandler, Copydata } = useAPIcontext()
  let ButtonAddedTrue = " hover:cursor-not-allowed bg-green-700 text-white bg-black mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center gap-x-3"
  let ButtonAddedFalse = "text-white bg-black mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center gap-x-3"

  let title, price, description, category, image, rate, count;

  if (!MainAPILoding && Copydata[id]) {
    ({
      title,
      price,
      description,
      category,
      image,
      rating: { rate, count },
    } = Copydata[id])
  } 

  return (
    <>
      <div className="min-h-[100vh] flex flex-col ">
        <Navbar />
        <section className="flex-grow py-8 md:py-16 flex items-center justify-center antialiased">
          <div class="max-w-screen-xl px-4 mx-auto">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16  ">
              <div class="shrink-0 max-w-md lg:max-w-lg mx-auto flex items-center">
                <img class="w-full  object-cover" src={image} alt="" />
              </div>

              <div class="mt-6 sm:mt-8  lg:mt-0 flex flex-col justify-center">
                <h1 className="text-xl font-semibold text-gray-900 sm:text-xl">
                  {category}
                </h1>
                <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl">
                  {title}
                </h1>
                <div class="mt-4 sm:items-center  sm:gap-4 sm:flex">
                  <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl ">
                    ${price}
                  </p>

                  <div class="flex items-center gap-2 mt-2 sm:mt-0">
                    <div class="flex items-center gap-1">
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    </div>
                    <p class="text-sm font-medium leading-none text-gray-500 ">
                      {rate}
                    </p>
                    <a
                      href="#"
                      class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline"
                    >
                      {count} Reviews
                    </a>
                  </div>
                </div>

                <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <button onClick={(e)=>{addToCartHandler(e, id)}}
                    to="/cart"
                    title=""
                    role="button"
                    className={Copydata[id]?.AddedToCart? ButtonAddedTrue : ButtonAddedFalse}
                  >
                    <BsCart/>
                    Add to cart
                  </button>
                </div>

                <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                <p class="mb-6 text-gray-500 dark:text-gray-400">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default IndivisualProduct;
