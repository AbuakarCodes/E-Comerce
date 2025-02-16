import Skeleton from "react-loading-skeleton";
import CartSkeletonItem from "./CartSkeletonItem";
import { useState } from "react";
const dummyArray = Array.from({ length: 5 }, (_, index) => index);

function CartSkeleton() {
  const [isMapLode, setIsMapLode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const MapLodingHandler = () => {
    setIsMapLode(false);
  };

  return (
    <div className="  md:p-6 gap-y-7 flex flex-col ">
      <nav className="sticky top-0 z-50 bg-[#F8F9FA] shadow-md">
        <div className="container mx-auto py-3 flex items-center justify-between">
          {/* Brand Name */}
          <Skeleton height={40} width={150} />

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <Skeleton height={5} width={5} />
          </button>

          {/* Navigation Links - Hidden on mobile, shown on large screens */}
          <div
            className={`lg:flex gap-4 ${
              isOpen
                ? "flex flex-col items-center w-full absolute top-[60px] left-0 bg-[#F8F9FA] py-4 shadow-md"
                : "hidden"
            }`}
          >
            <Skeleton height={25} width={80} />
            <Skeleton height={25} width={80} />
            <Skeleton height={25} width={80} />
            <Skeleton height={25} width={80} />
          </div>

          {/* Buttons - Always visible */}
          <div className="hidden lg:flex gap-2">
            <Skeleton height={35} width={100} />
            <Skeleton height={35} width={100} />
          </div>
        </div>
      </nav>
      {dummyArray.map((elem) => {
        return <CartSkeletonItem />;
      })}
    </div>
  );
}

export default CartSkeleton;
