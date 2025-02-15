import { createContext, useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export let APIcontext = createContext();
export function useAPIcontext() {return useContext(APIcontext)}


function MainApiContext({ children }) {
  const [mainAPIData, setmainAPIData] = useState([])
  const [Copydata, setCopydata] = useState([])
  const [MainAPILoding, setMainAPILoding] = useState(false)

  function addToCartHandler(e, id) {
    e.preventDefault();
    e.stopPropagation();
    let AddToCartTurner = Copydata.map((elem) => {
      if (elem.id == id) {
        return { ...elem, AddToCart: true };
      }
      return elem;
    })
      setCopydata(AddToCartTurner)
  }

  async function APicall() {
    try {
      setMainAPILoding(true)
      let response = await axios.get("https://fakestoreapi.com/products");
      setmainAPIData(response.data);
      setMainAPILoding(false)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

 

  useEffect(() => { APicall() },[])

  useEffect(() => {
    let ModifingAPi =  mainAPIData.map( (elem)=>{ return {...elem, AddToCart:false, quantity:1, FinalPrice:elem.price, Star:Math.floor(Math.random()*5)}  })
    setCopydata(ModifingAPi)
  }, [mainAPIData])

  return (
    <APIcontext.Provider value={{ mainAPIData, setmainAPIData, Copydata, setCopydata, MainAPILoding, addToCartHandler}}>
      {children}
    </APIcontext.Provider>
  )
}


export default MainApiContext;




