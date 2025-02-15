import { useState } from "react";
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css";


function RejesterSkeleton() {
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
    

        <div className="font-[sans-serif] place-content-center max-w-4xl flex items-center mx-auto md:min-h-[90vh] p-4  ">
      <div className="grid md:grid-cols-3 items-center  rounded-xl border border-gray-200 overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center md:space-y-16 space-y-8 max-md:mt-16 min-h-full   lg:px-8 px-4 py-4">
          <Skeleton height={40} width={200} />
          <Skeleton count={3} />
          <Skeleton height={40} width={200} />
          <Skeleton count={3} />
        </div>

        <div className="md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto">
          <Skeleton height={30} width={180} className="mb-6" />

          <div className="space-y-6">
            <Skeleton height={20} width={100} />
            <Skeleton height={40} className="w-full" />
            <Skeleton height={20} width={100} />
            <Skeleton height={40} className="w-full" />
            <Skeleton height={20} width={100} />
            <Skeleton height={40} className="w-full" />
            <Skeleton height={20} width={200} />
          </div>

          <div className="mt-8">
            <Skeleton height={40} className="w-full" />
          </div>
          <Skeleton height={20} width={250} className="mt-6 mx-auto" />
        </div>
      </div>
    </div>
    </>
  )
}

export default RejesterSkeleton
