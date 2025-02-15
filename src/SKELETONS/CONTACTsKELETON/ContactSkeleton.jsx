import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ContactSkeleton() {
  const [isMapLode, setIsMapLode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const MapLodingHandler = () => {
    setIsMapLode(false);
  };
  return (
    <>
      {/* 🔹 Navbar Skeleton */}
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

      {/* 🔹 Contact Us Section Skeleton */}
      <section className="px-8 py-8 lg:py-16">
        <div className="container mx-auto text-center">
          {/* Heading */}
          <Skeleton height={20} width="20%" className="mx-auto" />
          <Skeleton height={35} width="40%" className="mx-auto mt-2" />
          <Skeleton height={15} width="60%" className="mx-auto mt-4" />

          {/* Form & Map Skeleton */}
          <div className="relative grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start mt-10">
            {/* Google Map Skeleton */}
            {isMapLode && <Skeleton height={450} className="w-full" />}
            <iframe
              className="w-full"
              onLoad={MapLodingHandler}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217760.23951081806!2d74.16958088196087!3d31.482834783684996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1739447612989!5m2!1sen!2s"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Form Skeleton */}
            <form className="flex flex-col gap-4 lg:max-w-sm">
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
      </section>

      {/* 🔹 Footer Skeleton */}
      <footer className="mb-0 text-center py-4">
        <Skeleton height={20} width="50%" className="mx-auto" />
        <Skeleton circle height={40} width={40} className="mt-3 mx-auto" />
      </footer>
    </>
  );
}

export default ContactSkeleton;
