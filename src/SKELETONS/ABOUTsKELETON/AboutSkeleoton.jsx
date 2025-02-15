import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function AboutSkeleoton() {
     const [isOpen, setIsOpen] = useState(false);
    return (
       <>
        <nav className="sticky top-0 z-50 bg-[#F8F9FA] shadow-md">
      <div className="container mx-auto py-3 flex items-center justify-between">
        
        {/* Brand Name */}
        <Skeleton height={40} width={150} />

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <menu size={24} />}
        </button>

        {/* Navigation Links - Hidden on mobile, shown on large screens */}
        <div className={`lg:flex gap-4 ${isOpen ? "flex flex-col items-center w-full absolute top-[60px] left-0 bg-[#F8F9FA] py-4 shadow-md" : "hidden"}`}>
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

      {/* 🔹 About Page Skeleton */}
      <div className="container my-3 py-3 flex flex-col gap-y-11">
        {/* Heading */}
        <Skeleton height={50} width="40%" className="mx-auto" />
        <hr />

        {/* Paragraph */}
        <Skeleton count={3} width="80%" className="mx-auto" />

        {/* Subheading */}
        <Skeleton height={35} width="30%" className="mx-auto mt-5" />

        {/* Cards */}
        <div className="row">
          {Array(4)
            .fill()
            .map((_, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-3 px-3">
                <Skeleton height={200} />
                <Skeleton height={20} width="80%" className="mt-2" />
              </div>
            ))}
        </div>
      </div>

      {/* 🔹 Footer Skeleton */}
      <footer className="mb-0 text-center py-4">
        <Skeleton height={20} width="50%" className="mx-auto" />
        <Skeleton circle height={40} width={40} className="mt-3 mx-auto" />
      </footer>
       </>
      );
}

export default AboutSkeleoton