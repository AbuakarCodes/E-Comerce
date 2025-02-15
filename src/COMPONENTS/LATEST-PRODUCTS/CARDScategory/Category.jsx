import axios from "axios"
import { useState, useEffect } from "react"
import { useAPIcontext } from "../../../CONTEXT/MainApiContext"
import CategorySkeleton from "../../../SKELETONS/CATEGORYsKELETON/CategorySkeleton"
 
let TrueButtonClasses = " transition-all duration-300 text-lg bg-black text-white border border-black py-1 px-2 rounded-[.3rem]"
let FalseButtonClasses = " transition-all duration-300 text-lg  hover:bg-black hover:text-white border border-black py-1 px-2 rounded-[.3rem]"

function Category() {
  let {mainAPIData, Copydata, setCopydata} = useAPIcontext()    
    const [CategoryAPI, setCategoryAPI] = useState([])
    const [CategoryLodingAPI, setCategoryLodingAPI] = useState(false)

    async function CategoryAPICallAPI() {
      setCategoryLodingAPI(true)
      let response = await axios.get("https://fakestoreapi.com/products/categories")
      let Data = response.data
      setCategoryLodingAPI(false)
      let CreatingObject = [{ text: "all", Triggered: true }, ...Data.map((elem) => ({
        text: elem,
        Triggered: false,
      }))]
      setCategoryAPI(CreatingObject)
  }
  useEffect(() => {
    CategoryAPICallAPI()
   }, [])

   function CategoryHandler(CategoryName) {
    setCategoryTrigerclass(CategoryName)

    if (CategoryName === "all") { 
      setCopydata(mainAPIData)
      return;
    }    
    let CategoryFiltere = mainAPIData.filter( (elem) => elem.category === CategoryName );
    setCopydata(CategoryFiltere)
  }

  function setCategoryTrigerclass(CategoryName) {
    let ModifyingAPIForClass = CategoryAPI.map( (elem, index)=>{
     
       if (CategoryName == elem.text) {
        return {...elem, Triggered:true}  
      }
      return {...elem, Triggered:false}  
    })
    setCategoryAPI(ModifyingAPIForClass)
  }

  if (CategoryLodingAPI) {
    return <CategorySkeleton/>
  }

  return (
    <div className='flex items-center justify-center gap-2 py-[3rem] flex-wrap'>

        {CategoryAPI.map( (elem, idx)=>{
            return (
              <button key={idx} onClick={()=>{CategoryHandler(elem.text)}} className={elem.Triggered ? TrueButtonClasses : FalseButtonClasses }>
                {elem.text}
              </button>
            )
        })}
    </div>
  )
}

export default Category
