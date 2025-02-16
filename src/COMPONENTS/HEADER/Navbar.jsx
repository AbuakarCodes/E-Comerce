import React from "react";
import { LuLogIn } from "react-icons/lu";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";




import { useState } from "react";
import { NavLink } from "react-router";
import { useAPIcontext } from "../../CONTEXT/MainApiContext";

const Navigators = [
  { Link: "Home", Route: "/" },
  { Link: "Products", Route: "/products" },
  { Link: "About", Route: "/about" },
  { Link: "Contact", Route: "/contact" },
];



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navTogel = () => setIsOpen(!isOpen);
  let {Copydata} = useAPIcontext()
  
  let LenghtAddedProducts = Copydata.filter( (elem)=>{
    return elem.AddToCart == true
  }) 


  const Pages = [
    { Link: "Login", Icon: <LuLogIn />, Route: "/login" },
    { Link: "Register", Icon: <AiOutlineUserAdd />, Route: "/register" },
    { Link: "Cart", Icon: <BsCart />, Route: "/cart" , Length:LenghtAddedProducts?.length },
  ];

  return (
    <nav className=" sticky top-0 z-50 bg-[#F8F9FA] transition-all delay-200">
      <div className="container py-3 lg:py-4 flex flex-col gap-y-4 lg:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full lg:w-fit">
          <NavLink to={"/"} className={"lg:text-[2rem] font-bold text-[1.8rem]"}>
          SnapBuy 
          </NavLink>
          <button onClick={navTogel} className="lg:hidden">
            {isOpen? <ImCross className="text-xl font-bold" />:<GiHamburgerMenu className="text-2xl" />}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden lg:flex"
          } flex flex-col lg:flex-row items-center gap-x-3 text-black`}
        >
          {Navigators.map((elem, idx) => (
            <NavLink
              key={idx}
              className={({ isActive }) =>
                isActive
                  ? "text-black hover:opacity-65 text-lg transition-all duration-300"
                  : "text-lg hover:opacity-65 opacity-45 text-black transition-all duration-300"
              }
              to={elem.Route}
            >
              {elem.Link}
            </NavLink>
          ))}
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden lg:flex"
          } flex flex-wrap justify-center items-center gap-1 gap-x-3`}
        >
          {Pages.map((elem, idx) => (
            <NavLink
              key={idx}
              to={elem.Route}
              className={({ isActive }) =>
                isActive
                  ? " transition-all duration-300 bg-black text-white hover:bg-black hover:text-white px-3 py-[.4rem] rounded-lg border border-black flex items-center gap-x-2"
                  : " transition-all duration-300 hover:bg-black hover:text-white px-3 py-[.4rem] rounded-lg border border-black flex items-center gap-x-2"
              }
            >
              <button className="flex items-center gap-x-2">
                {elem.Icon} {elem.Link}  {elem.Length ? <div className="font-bold">({elem.Length})</div> : <></>}
              </button>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
