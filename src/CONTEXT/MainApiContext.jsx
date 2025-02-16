import { createContext, useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

export let APIcontext = createContext();
export function useAPIcontext() {
  return useContext(APIcontext);
}

function MainApiContext({ children }) {
  // STATES
  const [mainAPIData, setmainAPIData] = useState([]);
  const [Copydata, setCopydata] = useState([]);
  const [MainAPILoding, setMainAPILoding] = useState(false);
  // STATES

  function addToCartHandler(e, id) {
    e.preventDefault();
    e.stopPropagation();

    if (itemsAlreadyAdded(id)) return
    AddedItemToster();
    itemsInCart(id);
  }

  // FUNCTIONS
  function itemsInCart(id) {  
    let AddToCartTurner = Copydata.map((elem) => {
      if (elem.id == id) {
        return { ...elem, AddToCart: true };
      }
      return elem;
    });
    setCopydata(AddToCartTurner);
  }

  function itemsAlreadyAdded(id) {
    for (const elem of Copydata) {
      if (elem.id == id && elem.AddToCart){
        WarningAddedItemToster()
        return  true 
      } 
    }
    return false
  }

  function AddedItemToster() {
    toast.success("🛒 Added To Cart!", {
      position: "top-center",
      autoClose: 1,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
}

function WarningAddedItemToster() {
  toast.warn('⚠️ Already Added!', {
    position: "top-center",
    autoClose: 12,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
    });
  
}
  // FUNCTIONS

  // API-CALL
  async function APicall() {
    try {
      setMainAPILoding(true);
      let response = await axios.get("https://fakestoreapi.com/products");
      setmainAPIData(response.data);
      setMainAPILoding(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  // API-CALL

  useEffect(() => {
    APicall();
  }, []);

  useEffect(() => {
    let ModifingAPi = mainAPIData.map((elem) => {
      return {
        ...elem,
        AddToCart: false,
        quantity: 1,
        FinalPrice: elem.price,
        Star: Math.floor(Math.random() * 5),
      };
    });
    setCopydata(ModifingAPi);
  }, [mainAPIData]);

  return (
    <APIcontext.Provider
      value={{
        mainAPIData,
        setmainAPIData,
        Copydata,
        setCopydata,
        MainAPILoding,
        addToCartHandler,
      }}
    >
      {children}
    </APIcontext.Provider>
  );
}

export default MainApiContext;
