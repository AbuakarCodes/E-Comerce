import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

function LoginSkeleton() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="font-[sans-serif]">
        <nav className="sticky top-0 z-50 bg-[#F8F9FA] shadow-md">
          <div className="container mx-auto py-3 flex items-center justify-between">
            {/* Brand Name */}
            <Skeleton height={40} width={150} />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <menu size={24} />}
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

        <div className="min-h-[90vh] flex flex-col items-center justify-center py-6 px-4">
          <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl max-md:max-w-md w-full">
            <div className="flex flex-col gap-y-5">
              <Skeleton height={50} width={300} />
              <Skeleton height={25} width={400} />
              <Skeleton height={25} width={500} />
            </div>

            <form className="flex flex-col gap-4 w-full">
              {/* Email Field */}
              <Skeleton height={20} width="40%" />
              <Skeleton height={45} width="100%" />

              {/* Message Field */}
              <Skeleton height={20} width="40%" />
              <Skeleton height={120} width="100%" />

              {/* Button */}
              <Skeleton height={45} width="100%" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSkeleton;
