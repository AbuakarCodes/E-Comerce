import { useAPIcontext } from "../../CONTEXT/MainApiContext";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router";

function CartCard({totalFinalPrice, setTotalSum, CartItems, quantity, id, image, price, FinalPrice, description}) {
    let { setCopydata } = useAPIcontext()

    function truncateText(text, maxWords) {
        const words = text.split(" ");
        if (words.length > maxWords) {
          return words.slice(0, maxWords).join(" ") + "...";
        }
        return text;
    }



    function RemoveItem(id) {
      setTotalSum(totalFinalPrice)
      setCopydata((prev) => 
        prev.map((elem) => 
          elem.id === id ? { ...elem,  AddToCart: false } : elem
        )
      )
    }
    
    function IncreamentItems(id) {
      setTotalSum(totalFinalPrice)
      setCopydata((prev) =>
        prev.map((elem) =>
          elem.id === id ? { ...elem, FinalPrice:price*quantity,  quantity: elem.quantity + 1 } : elem
        )
      );
    }
    

    function decreamentItems(id) {
      setTotalSum(totalFinalPrice)
      setCopydata((prev) =>
        prev.map((elem) =>
          elem.id === id ? { ...elem, FinalPrice:price*quantity, quantity: elem.quantity - 1 } : elem
        )
      );
    }

    


  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
          <NavLink to={`products/${id-1}`} className="shrink-0 md:order-1">
            <img
              className="h-20 w-20 object-contain "
              src={image}
              alt="imac image"
            />
            
          </NavLink>

          <label for="counter-input" className="sr-only">
            Choose quantity:
          </label>
          <div className="flex items-center justify-between md:order-3 md:justify-end">
            <div className="text-l flex items-center border border-black gap-x-2 p-1 rounded-sm">
              <button onClick={()=>decreamentItems(id)}>
                <FaCaretLeft />
              </button>
              <div>{quantity}</div>
              <button onClick={()=>IncreamentItems(id)}>
                <FaCaretRight />
              </button>
            </div>

            <div className="text-end md:order-4 md:w-32">
              <p className="text-base font-bold text-gray-900 ">${Math.floor(FinalPrice?FinalPrice:price)}</p>
            </div>
          </div>

          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
            <p className="text-base font-medium text-gray-700 hover:underline">
             {truncateText(description, 25)}
            </p>

            <div className="flex items-center gap-4">

              <button
              onClick={()=>{RemoveItem(id)}}
                type="button"
                className="flex items gap-x-2 items-center text-sm font-medium text-red-600 hover:underline"
              >
                <RxCross1 />
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCard;
