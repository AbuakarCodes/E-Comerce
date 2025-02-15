import { lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import { Suspense } from "react";

import AboutSkeleoton from "./SKELETONS/ABOUTsKELETON/AboutSkeleoton";
import ContactSkeleton from "./SKELETONS/CONTACTsKELETON/ContactSkeleton";
import LoginSkeleton from "./SKELETONS/LOGINsKELETON/LoginSkeleton";
import RejesterSkeleton from "./SKELETONS/REGISTERsKELETON/RejesterSkeleton";

const About = lazy(() => import("./COMPONENTS/ABOUT/About"));
const MainApiContext = lazy(() => import("./CONTEXT/MainApiContext"));
const PageNotFound = lazy(() => import("./COMPONENTS/ERRORS/PageNotFound"));
const LatestProductsBG = lazy(() =>
  import("./COMPONENTS/LATEST-PRODUCTS/LatestProductsBG")
);
const Contact = lazy(() => import("./COMPONENTS/CONTACT/Contact"));
const IndivisualProduct = lazy(() =>
  import("./COMPONENTS/LATEST-PRODUCTS/INDIVISUALPRODUCT/IndivisualProduct")
);
const Login = lazy(() => import("./COMPONENTS/LOGIN/Login"));
const Register = lazy(() => import("./COMPONENTS/REGISTER/Register"));
const Cart = lazy( ()=> import("./COMPONENTS/CART/Cart"))

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <MainApiContext>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<App />} />
        <Route path="cart/products/:id" element={<IndivisualProduct />} />
       
        <Route
          path="/about"
          element={
            <Suspense fallback={<AboutSkeleoton />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<ContactSkeleton />}>
              <Contact />
            </Suspense>
          }
        />
        <Route path="/products" element={<LatestProductsBG />} />
        <Route
          path="/login"
          element={
            <Suspense fallback={<LoginSkeleton />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<RejesterSkeleton />}>
              <Register />
            </Suspense>
          }
        />
         <Route
          path="/cart"
          element={
            <Suspense fallback={"loding"}>
              <Cart />
            </Suspense>
          }
        />
        
      </Routes>
    </BrowserRouter>
  </MainApiContext>
);
