import React from "react";
import {  useLocation } from "react-router";
import { useAPIcontext } from "../../CONTEXT/MainApiContext";

import Category from "./CARDScategory/Category";
import CardsBg from "./CardsBg";
import Navbar from "../HEADER/Navbar";
import Footer from "../FOOTER/Footer";
import CardSkeletonBg from "../../SKELETONS/CARDSsKELETON/CardSkeletonBg";

function LatestProductsBG() {
  const { MainAPILoding } = useAPIcontext();
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/products" ? <Navbar /> : <></>}
      <div className="container">
        <h1 className="text-center py-4 text-[2rem] lg:text-[3rem] font-thin">Latest Products</h1>
        <hr />

        <Category></Category>

        {MainAPILoding ? <CardSkeletonBg /> : <CardsBg />}
      </div>
      {pathname === "/products" ? <Footer /> : <></>}
    </>
  );
}

export default LatestProductsBG;
