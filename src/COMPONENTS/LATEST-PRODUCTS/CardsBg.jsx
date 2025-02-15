import { useAPIcontext } from "../../CONTEXT/MainApiContext";
import { NavLink } from "react-router";
import Card from "./Card";
function CardsBg() {
      const { Copydata } = useAPIcontext()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3">
      {Copydata.map((elem, index) => {
        return (
       
            <NavLink key={index}  to={`cart/products/${elem.id-1}`} className="flex w-ful justify-center items-center">
              <Card
                Star={elem.Star}
                price={elem.price}
                image={elem.image}
                description={elem.description}
                category={elem.category}
                rate={elem.rating.rate}
                id={elem.id}
                AddToCart={elem.AddToCart}
              />
            </NavLink>
          
        );
      })}
    </div>
  );
}

export default CardsBg;
